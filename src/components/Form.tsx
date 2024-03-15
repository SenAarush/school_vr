import { useForm } from "react-hook-form";
import { ZodType, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiOutlineArrowRightCircle } from "react-icons/hi2";

type FormData = {
    name: string,
    email: string,
    message: string
}

type FormProps = {
    className?: string
}

export default function Form(props: FormProps) {
    const formSchema: ZodType<FormData> = z.object({
        name: z.string().min(1).max(30),
        email: z.string().email(),
        message: z.string().min(1)
    })
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(formSchema) })
    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    const FormParent = "relative px-6"
    const InputClass = "w-full p-[10px] rounded-md bg-[#f4f4f4]"
    const ErrorClass = "absolute text-[0.6rem] sm:text-lg sm:top-2 top-4 right-8 text-[red]"

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={props.className}>
            <h1 className="px-8 text-2xl font-semibold">Get Involved</h1>
            <div className={FormParent}>
                <input type="text" className={InputClass} {...register("name")} placeholder='Name' />
                {errors.name && <p className={ErrorClass}>{errors.name.message}</p>}
            </div>
            <div className={FormParent}>
                <input type="text" className={InputClass} {...register("email")} placeholder='Email' />
                {errors.email && <p className={ErrorClass}>{errors.email.message}</p>}
            </div>
            <div className={FormParent}>
                <textarea id="message" cols={30} rows={6} className={InputClass} {...register("message")} placeholder='Message'></textarea>
                {errors.message && <p className={ErrorClass}>{errors.message.message}</p>}
            </div>
            <button type="submit" className="hover:scale-110 duration-[400ms] max-w-[150px] rounded-full bg-gradient-to-r from-[#292d32] to-[#4D5157] mx-5 mt-5 mb-8 flex px-3 py-2 items-center w-2/5 justify-center gap-2">
                <span className="text-[#b6b6b6] text-center">Send</span>
                <HiOutlineArrowRightCircle className="text-[#b6b6b6] text-2xl" />
            </button>
        </form>
    )
}
