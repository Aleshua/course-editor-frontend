import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";

import { regFormSchema, RegFormSchemaType } from '../../lib/definitions/reg-form';

import { Modal, ModalContent, ModalTrigger } from "../ui/modal"
import { Button } from "../ui/button"
import Input from '../ui/input'

import SignUp from '../../lib/signup-handler';


const RegModal: React.FC = () => {

    const {
        register,
        handleSubmit,
        reset,
        setError,
        formState: { isDirty, isSubmitting, errors },
    } = useForm<RegFormSchemaType>({ resolver: zodResolver(regFormSchema) })

    const onSubmit: SubmitHandler<RegFormSchemaType> = async (data) => {
        const message = await SignUp(data)

        if (message === undefined) {
            reset()
        } else {
            setError('confirmPassword', {
                type: 'manual',
                message: message,
            });
        }
    }

    return (
        <Modal>
            <ModalTrigger>
                <Button className="" variant={"outline"}>Зарегистрироваться</Button>
            </ModalTrigger>
            <ModalContent>
                <div className="flex flex-col w-[360px]">
                    <h1 className="flex justify-center text-[24px] mb-4">Регистрация</h1>
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
                                aria-invalid={errors.password ? 'true' : 'false'}
                            />
                            {errors.password && (
                                <span role='alert' className='text-[14px] text-rose-600'>
                                    {errors.password?.message}
                                </span>
                            )}
                        </div>
                        <div>
                            <label htmlFor='confirmPassword' className='text-[16px]'>
                                Подтверждение пароля
                            </label>
                            <Input
                                {...register('confirmPassword')}
                                type='password'
                                id='confirmPassword'
                                aria-invalid={errors.confirmPassword ? 'true' : 'false'}
                            />
                            {errors.confirmPassword && (
                                <span role='alert' className='text-[14px] text-rose-600'>
                                    {errors.confirmPassword?.message}
                                </span>
                            )}
                        </div>
                        <div className='flex justify-center mb-2'>
                            <Button
                                type='submit'
                                disabled={!isDirty || isSubmitting}
                            >
                                Создать аккаунт
                            </Button>
                        </div>
                    </form>
                </div>
            </ModalContent>
        </Modal>
    )
}

export default RegModal
