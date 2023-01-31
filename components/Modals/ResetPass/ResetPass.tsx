import { FC } from "react";
import DefaultBtn from "../../UI/Buttons/DefoultBtn/DefaultBtn";
import Input from "../../UI/Input/Input";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { resetPassSchema } from "../../../common/shema/resetPass";
type Inputs = {
    email: string;
};
type ResetPassType = {};

const ResetPass: FC<ResetPassType> = () => {
    const {
        handleSubmit,
        formState: { errors, isLoading },
        control,
    } = useForm({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: yupResolver(resetPassSchema),
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-[20px] justify-center mx-[50px] max-[768px]:mx-0  w-[400px] max-[768px]:w-full "
        >
            <h3 className="text-center text-xl">Забули пароль?</h3>

            <Controller
                name="email"
                control={control}
                render={({ field }) => (
                    <Input
                        fn={() => {}}
                        className="w-full placeholder:text-start py-[15px] px-[15px] font-extralight"
                        value=""
                        field={field}
                        error={errors.email?.message}
                        placeholder="Ваш E-Mail"
                    />
                )}
            />
            <DefaultBtn fn={() => {}}>Відправти пароль на пошту</DefaultBtn>
        </form>
    );
};

export default ResetPass;
