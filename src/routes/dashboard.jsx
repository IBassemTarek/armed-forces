import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { SlArrowLeft } from "react-icons/sl";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlinePlusCircle, AiFillPrinter } from "react-icons/ai";
import { MdEditDocument } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";
import { Input } from "../components/input";
import instance from "../utils/axios";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import Popup from "../components/popup";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [ladingUserData, setLadingUserData] = useState(true);
  const [loadingTable, setLoadingTable] = useState(true);
  const [open, setOpen] = useState(false);
  const [table, setTable] = useState([]);
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [maktab, setMaktab] = useState(null);
  const [name, setName] = useState(null);
  const getUser = async () => {
    const userData = await instance.get(`user/me/`);
    setUser(userData.data);
    setLadingUserData(false);
  };
  const onChange = (e) => {
    const reader = new FileReader();
    setFile(e.target.files[0]);
    reader.readAsDataURL(e.target.files[0]);
  };

  const getTable = async () => {
    const tableData = await instance.get(`store/files/all/`);
    setTable(tableData.data);
    setLoadingTable(false);
  };
  useEffect(() => {
    getUser();
    getTable();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!maktab || !name || maktab === "" || name === "") {
      console.log("error");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.set("title", name);
      formData.set("branch", maktab);
      formData.set("file", file);
      await instance.post(`store/upload/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      getTable();
      setLoading(false);
      setOpen(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    await instance.delete(`store/${id}/`);
    getTable();
  };

  return (
    <Fragment>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen bg-primary  py-9">
        {/* LOGOUT TABAREA */}
        <div className="bg-secondary-400 absolute top-0 md:top-[6%] rounded z-10 left-0 md:left-[4%]">
          <div className="flex justify-center items-center p-2">
            <div
              className="bg-tertiary-100 h-8 w-8 rounded-full items-center flex justify-center"
              onClick={() => {
                localStorage.removeItem("accessToken");
                navigate("/login");
              }}
            >
              <SlArrowLeft color="white" size={14} />
            </div>
            <span className="text-black text-xs font-mono ml-3">
              الحاسب الآلي الإداري
            </span>
          </div>
          <div>
            <div className="flex p-2 bg-secondary-300 rounded-br-md rounded-bl-md justify-center">
              <span className="text-black text-xs font-mono">
                {ladingUserData ? "جاري التحميل" : user?.name}
              </span>
            </div>
          </div>
        </div>

        {/* PAGE BODY */}
        <div className="p-5 bg-primary rounded-md w-full h-full relative py-6 xl:px-44">
          {/* HEADER */}
          <div className="flex items-center justify-start md:flex-row-reverse flex-col md:mr-28">
            <div className="bg-secondary-200 w-32 h-32 rounded-full ml-5" />
            <div>
              <h1 className="text-center text-black text-lg font-semibold font-mono md:text-right ">
                محرك بحث اللواء
              </h1>
              <h2 className="text-center text-secondary-100 text-md md:text-right">
                تأكد في إستخدام البرنامج في عمليه الحفظ و التعديل لدي أي ملف
              </h2>
            </div>
          </div>

          {/* TABLE AREA */}
          <div className="flex flex-col mt-5 bg-white rounded-md p-3">
            <div className="flex gap-3 w-full justify-between">
              <div className="w-[45%] static">
                <Input
                  textRight={false}
                  placeholder={"الملف الأول للتجربه"}
                  icon={
                    <div className="relative left-0 bg-black flex self-start">
                      <BiSearchAlt2
                        color="black"
                        size={22}
                        className="absolute left-2 top-2"
                      />
                    </div>
                  }
                />
              </div>

              <div className="w-[30%] bg-transparent border my-2 rounded-md border-secondary-400 pr-2">
                <select
                  className="w-full h-full text-xs font-mono text-black text-center font-semibold"
                  prefix="filter"
                >
                  <option>الفلتر</option>
                  <option>الكل</option>
                  <option>البعض</option>
                  <option>بعضهم</option>
                </select>
              </div>

              <div className="w-[20%] flex bg-black justify-center items-center my-2 rounded-md">
                <span className="text-white text-xs font-mono text-center font-semibold">
                  بحث
                </span>
              </div>
            </div>
            <div className="overflow-auto flex flex-col">
              <table className="table-auto w-full mt-3 border-b-2 border-secondary-200">
                <thead className="border-b-2 border-secondary-200">
                  <tr>
                    <th className="px-4 py-2 w-[30%]">العمليات</th>
                    <th className="px-4 py-2">الكاتب</th>
                    <th className="px-4 py-2">المكتب</th>
                    <th className="px-4 py-2">تاريخ الإنشاء</th>
                    <th className="px-4 py-2 w-[30%]">إسم الملف</th>
                  </tr>
                </thead>
                <tbody>
                  {loadingTable ? (
                    <tr>
                      <td colSpan={5} className="text-center">
                        <div className="flex justify-center items-center">
                          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-secondary-200" />
                        </div>
                      </td>
                    </tr>
                  ) : (
                    table.map((item, index) => (
                      <tr>
                        <td className="whitespace-nowrap text-sm px-4 py-2 border-r-2 border-dashed border-secondary-200 flex gap-2 ">
                          <button
                            type="submit"
                            className="bg-error  px-2 py-1 rounded-md flex items-center bg-opacity-5"
                            onClick={() => {
                              handleDelete(item.id);
                            }}
                          >
                            <span className="font-sans text-error mr-1">
                              حذف
                            </span>
                            <BsFillTrashFill className="text-error" />
                          </button>
                          <button
                            type="submit"
                            className="bg-warning  px-2 py-1 rounded-md flex items-center bg-opacity-5"
                          >
                            <span className="font-sans text-warning mr-1">
                              تعديل
                            </span>
                            <MdEditDocument className="text-warning" />
                          </button>
                          <button
                            type="submit"
                            className="bg-success  px-2 py-1 rounded-md flex items-center bg-opacity-5"
                          >
                            <span className="font-sans text-success mr-1">
                              ارسل للطباعة
                            </span>
                            <AiFillPrinter className="text-success" />
                          </button>
                        </td>
                        <td className="whitespace-nowrap text-sm px-4 py-2">
                          {item.author}
                        </td>
                        <td className="whitespace-nowrap text-sm px-4 py-2">
                          {item.branch}
                        </td>
                        <td className="whitespace-nowrap text-sm px-4 py-2">
                          {moment(item.updatedAt).utc().format("YYYY-MM-DD")}
                        </td>
                        <td className="whitespace-nowrap text-sm px-4 py-2">
                          {item.title}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
            <div className=" w-full flex flex-col-reverse gap-3 md:flex-row mt-4 justify-between mx-2 px-lg-8 items-center self-center">
              <span className="text-xs text-black">
                CSE built with ❤️ by @ElsayedDev
              </span>
              <button
                type="button"
                className="bg-black  px-2 py-1 rounded-md flex items-center whitespace-nowrap"
                onClick={() => setOpen(true)}
              >
                <span className="font-bold font-sans text-white mr-2">
                  انشاء ملف جديد
                </span>
                <AiOutlinePlusCircle color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Popup open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-[25rem] bg-white md:w-[52rem]">
          <div className="w-full h-[20rem] bg-gray-200 justify-center items-center flex">
            <img
              //local image
              src={require("../assets/file.png")}
            />
          </div>

          <div className="w-full flex justify-center items-end px-4 flex-col mt-3">
            <div className="flex gap-2">
              <div>حدد اسم للملف</div>
              <img
                //local image
                src={
                  name
                    ? require("../assets/done.png")
                    : require("../assets/undone.png")
                }
              />
            </div>
            <Input
              textRight={true}
              placeholder={"مثال: جواب الي س ص ع د ن م ك ت ع ا ى "}
              filled={false}
              styles={"pr-6"}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="w-full flex justify-center items-end px-4 flex-col mt-3">
            <div className="flex gap-2">
              <div>اسم المكتب</div>
              <img
                //local image
                src={
                  maktab
                    ? require("../assets/done.png")
                    : require("../assets/undone.png")
                }
              />
            </div>
            <Input
              textRight={true}
              placeholder={"اسم المكتب"}
              filled={false}
              styles={"pr-6"}
              onChange={(e) => setMaktab(e.target.value)}
            />
          </div>

          <div className="w-full flex justify-center items-end px-4 flex-col mt-3">
            <div className="flex gap-2">
              <div>رفع الملف بعد التعديل</div>
              <img
                //local image
                src={
                  file
                    ? require("../assets/done.png")
                    : require("../assets/undone.png")
                }
              />
            </div>
            <div className="w-full  pr-6">
              <input
                className="
                w-[100%]
                bg-red  border-secondary-100 border-[1px]
                form-control block
                px-2 py-1.5 
                text-base font-normal text-gray-700
                bg-clip-padding rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none mt-2"
                type="file"
                id="formFile"
                onChange={onChange}
              />
            </div>
          </div>

          <button
            type="button"
            className="bg-black text-white p-2 rounded-md m-4 mx-auto w-[40%] font-bold justify-center items-center flex"
            onClick={handleSubmit}
          >
            {loading ? (
              <svg
                aria-hidden="true"
                class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              <span>تأكيد</span>
            )}
          </button>
        </div>
      </Popup>
    </Fragment>
  );
};
