import { RegFormSchemaType } from "./definitions/reg-form"

import bcrypt from 'bcryptjs'

async function SignUp(data: RegFormSchemaType): Promise<string | undefined> {
    try {
        const hashedPassword = await bcrypt.hash(data.password, 10);

        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                email: data.email,
                hashedPassword: hashedPassword
            }),
        });

        if (!response.ok) {
            throw new Error('Ошибка');
        }

        const postData = await response.json();

        return postData.message


    } catch (error) {
        return "При регистрации пользователя произошла ошибка"
    }
}

export default SignUp