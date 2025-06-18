'use client';

import ButtonSubmitComponent from "@/component/ButtonSubmitComponent/buttonSubmitComponent";
import HeartComponent from "@/component/HeartComponent/HeartComponent";
import QuestionComponent from "@/component/QuestionComponent/QuestionComponent";
import type { Country } from "@/types/Country"
import { useEffect, useState } from "react";

export default function Page() {
    const TOTAL_LIVES = 5;
    const WRONG_ANSWER = 3;
    const [countries, setCountries] = useState<Country[]>([]);
    const [current, setCurrent] = useState<Country | null>(null);
    const [options, setOptions] = useState<string[]>([]);
    const [result, setResult] = useState<'correct' | 'wrong' | null>(null);
    const [lives, setLives] = useState(TOTAL_LIVES);
    const [points, setPoint]= useState(0);
    //Lấy các option cho câu trả lời
    const getOption = (
        correct: Country,
        pool: Country[],
        wrongCount: 3
    ) => {
        //Lọc đáp án đúng
        const options = pool.filter((opt) => opt.code !== correct.code);
        //Lấy ngẫu nhiên các nước sai
        const wrong: string[] = [];
        while (wrong.length < wrongCount && options.length) {
            const index = Math.floor(Math.random() * options.length)
            wrong.push(options[index].name);
            options.splice(index, 1);
        }

        //Gộp các đáp án vào xáo trộn
        const answers = [...wrong, correct.name];
        for (let i = answers.length - 1; i === 0; i--) {
            const j = Math.floor(Math.random() * i + 1);
            answers[i], answers[j] = answers[j], answers[j];

        }
        return answers;
    }

    //Tạo câu hỏi tiếp theo
    const createRandomQuestion = (list: Country[]) => {
        const correct = list[Math.floor(Math.random() * list.length)]
        setCurrent(correct);
        setOptions(getOption(correct, list, WRONG_ANSWER))
    };

    //Click chọn đáp án
    const handleSelect = (name: string) => {
        if (!current) return;
        const isCorrect = name === current.name;
        setResult(isCorrect ? 'correct' : 'wrong');
        console.log("RESULT: ", isCorrect)
        if (isCorrect) {
            setTimeout(() => {
                setPoint(points+1);
                setResult(null);
                createRandomQuestion(countries);
            }, 0);
        }

        else if (lives > 0) {
            setLives((prev) => prev - 1);
        };


    }


    useEffect(() => {
        (async () => {
            const res = await fetch(
                'https://restcountries.com/v3.1/all?fields=name,flags,cca2'
            );
            const raw = await res.json();

            const list: Country[] = raw.map((c: any) => ({
                name: c.name.common,
                flag: c.flags.svg,
                code: c.cca2,
            }));

            setCountries(list);
            createRandomQuestion(list);
        })();
    }, []);

    //Restart
    const restartGame = () => {
        setLives(TOTAL_LIVES);
        createRandomQuestion(countries);
    };

    if (!current) return <p>Loading…</p>;
    if (lives === 0)
        return (
            <div className="flex flex-col h-screen items-center justify-center">
                <h1 className="mb-5 text-3xl font-bold text-red-600">
                    Game Over!
                </h1>
                <h2 className="text-xl font-bold text-black mb-3">Point: {points}</h2>
                <ButtonSubmitComponent text="Restart" onClick={restartGame} />
            </div>

        );


    return (
        <div className="gap-6 p-6 justify-center items-center text-center min-h-screen ">
            <HeartComponent lives={lives} total={TOTAL_LIVES} />
            <div className="
            flex font-semibold
            md:text-xs
            lg:text-xl
            sm:text-xl
            ">
                Point: {points}
            </div>
            <QuestionComponent current={current} options={options} onSelect={handleSelect} />
        </div>
    );
}
