import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'

const initialValue: Descendant[] = [
    {
        type: 'paragraph',
        children: [{ text: 'A line of text in a paragraph.' }],
    },
]

type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }

declare module 'slate' {
    interface CustomTypes {
        Element: CustomElement
        Text: CustomText
    }
}

function Editor() {
    const [value, setValue] = useState<Descendant[]>(initialValue)
    const [editor] = useState(() => withReact(createEditor()))

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`...?id=${searchParams.get('id')}`);

                if (!response.ok) {
                    throw new Error('Ошибка');
                }

                const result = await response.json();

                setValue(result);
            } catch (error) {
                console.log("Ошибка при получении json")
            }
        };

        fetchData();
    });

    return (
        <main className="flex flex-col min-h-screen bg-secondary font-robotoFlex">
            <Slate editor={editor} initialValue={value}>
                <Editable />
            </Slate>
        </main>
    )
}

export default Editor
