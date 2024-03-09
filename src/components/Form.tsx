import { useForm } from "react-hook-form"
import { ZodType, z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


type FormData = {
    name: string,
    email: string,
    message: string
}


export default function Form() {
    const formSchema: ZodType<FormData> = z.object({
        name: z.string().min(1).max(30),
        email: z.string().email(),
        message: z.string()
    })

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(formSchema) })

    const onSubmit = (data: FormData) => {
        console.log(data)
    }

    return (
        <div className="bg-slate-600">
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>Name</label>
                <input type="text" {...register("name")} />
                {errors.name && <p className="bg-red-900">{errors.name.message}</p>}

                <label>Email</label>
                <input type="email" {...register("email")} />
                {errors.email && <p className="bg-red-900">{errors.email.message}</p>}


                <label>Message</label>
                <input type="text" {...register("message")} />
                {errors.email && <p className="bg-red-900">{errors.email.message}</p>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )

}