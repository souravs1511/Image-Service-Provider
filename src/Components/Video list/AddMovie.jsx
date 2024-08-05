/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCancel } from "react-icons/md";
import { uservideos } from "../Feature/Register";
import { toast } from "react-toastify";
import { Modal } from 'reactstrap';

export default function AddMovie({ cleanpop, isopen }) {
    const dispatch = useDispatch();
    const [img, setimg] = useState('');
    const userDetails = useSelector(data => data?.RegisterUser?.RegisterUsers);
    const [id, setId] = useState('');
    const fileInputRef = useRef(null); 

    useEffect(() => {
        const data = localStorage.getItem('userLoginData');
        const userId = JSON.parse(data);
        setId(userId?.id);
    }, []);

    // Handle image input and convert to base64
    function handleimg(e) {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result;
                setimg(base64String);
            };
            reader.readAsDataURL(file);
        }
    }

    // Form handling with react-hook-form
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const match = userDetails.find((items) => items.id === id);
        dispatch(uservideos({ ...data, Image: img, id: id, userDetails: match.username }));
        reset();
        cleanpop(false);
        setimg('')
        fileInputRef.current.value = ''
        toast.success("User Post Add Successfully!", {
            position: "top-right"
        });
    };

    // Remove selected image and reset file input
    const removeImage = () => {
        setimg('');
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; 
        }
    };

    return (
        <Modal isOpen={isopen} size="lg" centered>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center p-3 bg-white gap-2 rounded-xl border h-auto mt-8">
                <div className="w-full flex justify-end p-[5px]">
                    <MdCancel onClick={() => cleanpop(false)} className="text-2xl cursor-pointer" />
                </div>
                <input
                    {...register("Title", { required: true })}
                    required
                    type="text"
                    placeholder="IMAGE TITLE"
                    className="focus:outline-none lg:w-[400px] w-[270px] py-1 px-1 font-semibold text-[16px] rounded bg-white text-black border-b-2 border-b-stone-600 focus:border-b-white"
                />
                <div className="flex gap-3">
                    <input
                        placeholder="ADD YOUR IMAGE"
                        onChange={handleimg}
                        type="file"
                        accept="image/*"
                        ref={fileInputRef}
                        required
                        className="focus:outline-none lg:w-[400px] w-[270px] py-1 px-1 font-semibold text-[16px] rounded bg-white text-black border-b-2 border-b-stone-600 focus:border-b-black"
                    />
                </div>
                {img && (
                    <div className="relative w-[200px] h-[200px] mt-4">
                        <img src={img} alt="Preview" className="w-full h-full object-cover rounded-md" />
                        <MdCancel onClick={removeImage} className="absolute top-2 right-2 text-2xl text-red-500 cursor-pointer" />
                    </div>
                )}
                <button
                    type="submit"
                    className="bg-[#E9522C] lg:w-[400px] w-full py-1 rounded-md text-white font-semibold hover:bg-[#c84343] transition duration-500 ease-in-out"
                >
                    ADD VIDEO
                </button>
            </form>
        </Modal>
    );
}
