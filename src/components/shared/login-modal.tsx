import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";

import { loginFormSchema, LoginFormSchemaType } from '../../lib/definitions/login-form';

import { Modal, ModalContent, ModalTrigger } from "../ui/modal"
import { Button } from "../ui/button"
import Input from '../ui/input'


const LoginModal: React.FC = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isDirty, isSubmitting, errors },
    } = useForm<LoginFormSchemaType>({ resolver: zodResolver(loginFormSchema) })

    const onSubmit: SubmitHandler<LoginFormSchemaType> = (data) => {
        console.log(data)
        reset()
    }

    return (
        <Modal>
            <ModalTrigger>
                <Button className="" variant={"outline"}>Войти</Button>
            </ModalTrigger>
            <ModalContent>
                <div className="flex flex-col w-[360px]">
                    <h1 className="flex justify-center text-[24px] mb-4">Вход</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-4 px-2'>
                        <div>
                            <label htmlFor='email' className='text-[16px]'>
                                Адрес электронной почты
                            </label>
                            <Input
                                {...register('email')}
                                // type='email'
                                id='email'
                                placeholder='name@mail.com'
                                aria-invalid={errors.email ? 'true' : 'false'}
                            />
                            {errors.email && (
                                <span role='alert' className='text-[14px] text-rose-600'>
                                    {errors.email?.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <label htmlFor='password' className='text-[16px]'>
                                Пароль
                            </label>
                            <Input
                                {...register('password')}
                                type='password'
                                id='password'
                            />
                        </div>

                        <div className='flex justify-center mb-2'>
                            <Button
                                type='submit'
                                disabled={!isDirty || isSubmitting}
                            >
                                Войти
                            </Button>
                        </div>
                    </form>
                </div>
            </ModalContent>
        </Modal>
    )
}

export default LoginModal
