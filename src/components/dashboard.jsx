import { Fragment, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Input } from "../components/input";
import { useNavigate } from "react-router-dom";
import { SlArrowLeft } from "react-icons/sl";

export const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="flex justify-center items-center h-screen bg-gray-100 px-9 py-9">
        <div className="p-5 bg-white rounded-md w-full h-full relative py-6">
          <div className="flex flex-row-reverse items-center justify-center">
            <div className="bg-gray-400 w-32 h-32 rounded-full ml-5" />
            <div>
              <h1 className="text-right text-black text-lg font-semibold font-mono">
                محرك بحث اللواء
              </h1>
              <h2 className="text-right text-gray-400 text-md">
                تأكد في إستخدام البرنامج في عمليه الحفظ و التعديل لدي أي ملف
              </h2>
            </div>
          </div>
          <div className="bg-gray-200 absolute top-5 rounded">
            <div className="flex justify-center items-center p-2">
              <div className="bg-black h-8 w-8 rounded-full items-center flex justify-center">
                <SlArrowLeft color="white" size={14} />
              </div>
              <span className="text-black text-xs font-mono ml-3">
                الحاسب الآلي الإداري
              </span>
            </div>
            <div>
              <div className="flex p-2 bg-gray-400 rounded-br-md rounded-bl-md justify-center">
                <span className="text-black text-xs font-mono">
                  ج/أحمد السيد محمد
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
