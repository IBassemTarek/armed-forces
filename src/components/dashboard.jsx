import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { SlArrowLeft } from "react-icons/sl";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlinePlusCircle, AiFillPrinter } from "react-icons/ai";
import { MdEditDocument } from "react-icons/md";
import { BsFillTrashFill } from "react-icons/bs";

import { Input } from "./input";

export const Dashboard = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen bg-primary px-9 py-9">
        <div className="bg-secondary-400 absolute top-0 md:top-[6%] rounded z-10 left-0 md:left-[4%]">
          <div className="flex justify-center items-center p-2">
            <div className="bg-tertiary-100 h-8 w-8 rounded-full items-center flex justify-center">
              <SlArrowLeft color="white" size={14} />
            </div>
            <span className="text-black text-xs font-mono ml-3">
              الحاسب الآلي الإداري
            </span>
          </div>
          <div>
            <div className="flex p-2 bg-secondary-300 rounded-br-md rounded-bl-md justify-center">
              <span className="text-black text-xs font-mono">
                ج/أحمد السيد محمد
              </span>
            </div>
          </div>
        </div>
        <div className="p-5 bg-primary rounded-md w-full h-full relative py-6 xl:px-44">
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
          <div className="flex flex-col mt-5 bg-white rounded-md p-3">
            <div className="flex gap-3">
              <div className="flex-[7_7_0%] static">
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

              <div className="flex-[3_3_0%] bg-transparent border my-2 rounded-md border-secondary-400 pr-2">
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

              <div className="flex-1 flex bg-black justify-center items-center my-2 rounded-md">
                <span className="text-white text-xs font-mono text-center font-semibold">
                  بحث
                </span>
              </div>
            </div>
            <div className="overflow-auto flex flex-col">
              <table className="table-auto w-full mt-3">
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
                  <tr>
                    <td className="whitespace-nowrap text-sm px-4 py-2 border-r-2 border-dashed border-secondary-200 flex gap-2 ">
                      <button
                        type="submit"
                        className="bg-error  px-2 py-1 rounded-md flex items-center bg-opacity-5"
                      >
                        <span className="font-sans text-error mr-1">حذف</span>
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
                      ج/ احمد السيد محمد
                    </td>
                    <td className="whitespace-nowrap text-sm px-4 py-2">
                      الحاسب الالي الاداري _ 1
                    </td>
                    <td className="whitespace-nowrap text-sm px-4 py-2">
                      16 / 03 / 2023
                    </td>
                    <td className="whitespace-nowrap text-sm px-4 py-2">
                      الملف الاول للتجربة _ خاصة برنامج محرك البحث الاول _
                      الاصدار الاول
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="bg-secondary-200 w-full p-[0.5px] mt-1" />
              <div className=" w-[95%] flex mt-4 justify-between mx-2 px-8 items-center self-center">
                <span className="text-xs text-black">
                  CSE built with ❤️ by @ElsayedDev
                </span>
                <button
                  type="submit"
                  className="bg-black  px-2 py-1 rounded-md flex items-center"
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
      </div>
    </Fragment>
  );
};
