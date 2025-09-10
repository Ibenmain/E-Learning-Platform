import { Icon } from "@iconify/react"
import { useForm } from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import CountryFlagSelect from "./component/CountryFlag";
import { useState } from "react";

const schema = yup.object({
    currentPassword: yup.string().min(8).max(100).required('Current password is required'),
    newPassword: yup.string().min(8).max(100).required('New password is required'),
    confirmPassword: yup.string().min(8).max(100).required('Confirm password is required and must match new password').oneOf([yup.ref('newPassword')], 'Passwords must match'),
}).required();

interface SettingsFormValues {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}


const Settings = () => {

    const [country, setCountry] = useState<string>("MA");
    const [language, setLanguage] = useState<string>("GB");

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SettingsFormValues>({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: SettingsFormValues) => {
        console.log(data);
    };

    const maghreb = [
        { code: "MA", name: "Morocco" },
        { code: "DZ", name: "Algeria" },
        { code: "TN", name: "Tunisia" },
        { code: "EG", name: "Egypt" },
    ];


    const languages = [
        { code: "GB", name: "English", countryCode: "GB" },
        { code: "FR", name: "French", countryCode: "FR" },
        { code: "ES", name: "Spanish", countryCode: "ES" },
        { code: "DE", name: "German", countryCode: "DE" },
        { code: "IT", name: "Italian", countryCode: "IT" },
        { code: "PT", name: "Portuguese", countryCode: "PT" },
        { code: "AR", name: "Arabic", countryCode: "SA" },
        { code: "CN", name: "Chinese", countryCode: "CN" },
        { code: "JP", name: "Japanese", countryCode: "JP" },
        { code: "KR", name: "Korean", countryCode: "KR" },
        { code: "RU", name: "Russian", countryCode: "RU" },
        { code: "IN", name: "Hindi", countryCode: "IN" },
        { code: "TR", name: "Turkish", countryCode: "TR" },
        { code: "NL", name: "Dutch", countryCode: "NL" },
        { code: "SV", name: "Swedish", countryCode: "SE" },
        { code: "NO", name: "Norwegian", countryCode: "NO" },
        { code: "FI", name: "Finnish", countryCode: "FI" },
        { code: "PL", name: "Polish", countryCode: "PL" },
        { code: "GR", name: "Greek", countryCode: "GR" },
        { code: "IL", name: "Hebrew", countryCode: "IL" },
    ];


    return (
        <div className="">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2 z-0 px-10 lg:px-0">
                <div className=" grid grid-rows-2 gap-2  ">
                    <div className="relative rounded-md dark:bg-[#212A34]  bg-[#f5f5f5] space-y-4 ">
                        <h1 className="p-2 text-lg font-medium flex justify-center items-center bg-[#ececec] dark:bg-[#2f3a47] rounded-md">
                            Profile settings
                        </h1>
                        <div className="w-full flex justify-center items-center ">
                            <div className="relative bg-[#9fef00] w-[120px] h-[120px] rounded-full flex justify-center items-center ">
                                <img src="/images/ibenmain.jpg" alt="not found" className="object-cover w-[94%] h-[94%] rounded-full" />
                                <button>
                                    <Icon icon="mdi:pencil" className="absolute right-0 top-2/3 rounded-full bg-[#9fef00] w-7 h-7 p-1" color="black" />
                                </button>
                            </div>
                        </div>
                        <div className="py-5 space-y-6">
                            <div className="relative flex flex-col justify-center items-center ">
                                <label className="w-3/4 sm:w-1/2 text-start pl-4" htmlFor="">full-name</label>
                                {/* <Icon icon="mdi:pencil" className="absolute" /> */}
                                <input type="text" placeholder="Issam Benmaina" className="bg-transparent placeholder:text-gray-600 h-12  border-2 rounded-2xl pl-4 border-[#9fef00] w-3/4 sm:w-1/2 " />
                            </div>
                            <div className="flex justify-center items-center">
                                <button className="font-medium bg-gradient-to-tr from-[#AAED00] to-[#5CFD85] text-black p-3 w-28 rounded-md">
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=" rounded-md -md dark:bg-[#212A34] bg-[#f5f5f5] space-y-4 ">
                        <h1 className="p-2 text-lg font-medium flex justify-center items-center bg-[#ececec] dark:bg-[#2f3a47] rounded-md">
                            Learner Data Report
                        </h1>
                        <div className="space-y-6  py-10">
                            {/* country flag component */}
                            <div className="relative flex flex-col justify-center items-center z-10">
                                <label className="w-3/4 sm:w-1/2 text-start pl-4" htmlFor="">Country</label>
                                {/* <Icon icon="mdi:pencil" className="absolute" /> */}
                                {/* country flag select component */}
                                <CountryFlagSelect value={country} onChange={setCountry} className="w-3/4 sm:w-1/2" dropdownClassName="max-h-48" />
                            </div>
                            <div className="relative flex flex-col justify-center items-center ">
                                <label className="w-3/4 sm:w-1/2 text-start pl-4" htmlFor="">Languages</label>
                                {/* <Icon icon="mdi:pencil" className="absolute" /> */}
                                {/* country flag select component */}
                                <CountryFlagSelect value={language} onChange={setLanguage} className="w-3/4 sm:w-1/2" countries={languages} dropdownClassName="max-h-24" />
                            </div>

                            <div className="flex justify-center items-center">
                                <button className="font-medium bg-[#64748b] text-black p-3 w-28 rounded-md">
                                    Change
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-rows-[2fr_1fr] gap-2">
                    <div className="border rounded-md -md dark:bg-[#212A34]  bg-[#f5f5f5] space-y-4 w-full">
                        <h1 className="p-2 text-lg font-medium flex justify-center items-center bg-[#ececec] dark:bg-[#2f3a47] rounded-md">
                            Security settings
                        </h1>
                        {/* form */}
                        <form onSubmit={handleSubmit(onSubmit)} className={`py-5 ${(errors.currentPassword || errors.newPassword || errors.confirmPassword) ? "space-y-4" : "space-y-6"}  flex flex-col justify-center items-center w-full `}>
                            <div className="relative flex flex-col justify-center items-center w-full ">
                                <label className="w-3/4 sm:w-1/2 text-start pl-4" htmlFor="">Current password</label>
                                <input type="password" placeholder="**********" className="bg-transparent placeholder:text-gray-600 h-12  border-2 rounded-2xl pl-4 border-[#9fef00] w-3/4 sm:w-1/2 " {...register("currentPassword")} />
                                <div className="flex justify-start items-start w-3/4 sm:w-1/2">
                                    {errors.currentPassword && <p className="text-red-500 text-sm mt-1">{errors.currentPassword.message}</p>}
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center w-full ">
                                <label className="w-3/4 sm:w-1/2 text-start pl-4" htmlFor="">New password</label>
                                <input type="password" placeholder="**********" className="bg-transparent placeholder:text-gray-600 h-12  border-2 rounded-2xl pl-4 border-[#9fef00] w-3/4 sm:w-1/2 " {...register("newPassword")} />
                                <div className="flex justify-start items-start w-3/4 sm:w-1/2">
                                    {errors.newPassword && <p className="text-red-500 text-sm mt-1">{errors.newPassword.message}</p>}
                                </div>
                            </div>
                            <div className="relative flex flex-col justify-center items-center w-full ">
                                <label className="w-3/4 sm:w-1/2 text-start pl-4" htmlFor="">Confirm password</label>
                                <input type="password" placeholder="**********" className="bg-transparent placeholder:text-gray-600 h-12  border-2 rounded-2xl pl-4 border-[#9fef00] w-3/4 sm:w-1/2 " {...register("confirmPassword")} />
                                <div className="flex justify-start items-start w-3/4 sm:w-1/2">
                                    {errors.confirmPassword && <p className="text-red-500 text-start  text-sm mt-1">{errors.confirmPassword.message}</p>}
                                </div>
                            </div>
                            {/* submit */}
                            <div className="flex justify-center items-center">
                                <button type="submit" className="font-medium bg-[#64748b] text-black p-3 w-28 rounded-md">
                                    Change
                                </button>
                            </div>
                            {/* 2FA */}
                            <div className="flex   flex-row justify-between items-center  w-3/4 sm:w-1/2">
                                <h1>Enable 2FA</h1>
                                {/* toggle */}
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" className="sr-only peer outline-none" />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#9fef00] outline-none"></div>
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="rounded-md dark:bg-[#212A34]  bg-[#f5f5f5]  space-y-16">
                        <h1 className="p-2 text-lg font-medium flex justify-center items-center bg-[#ececec] dark:bg-[#2f3a47] rounded-md">
                            Privacy Settings
                        </h1>
                        <div className="flex flex-col justify-center items-center space-y-4 px-5">
                            <p className="text-sm text-center">Once you delete your account, there is no going back. Please be certain.</p>
                            <button className="bg-red-500 text-white p-3 w-3/4 sm:w-1/2 rounded-md">
                                Delete account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings