import { Icon } from '@iconify/react';
import React, { useState } from 'react';

const Question = () => {
    const [openQuestionId, setOpenQuestionId] = useState<boolean[]>(Array(5).fill(false));

    const questions = [
        {
            id: 0,
            question: "Are the courses self-paced or live?",
            answer: "The courses are self-paced, meaning you can study at your own pace and learn at your own speed. The live sessions are optional and will help you with any questions you may have during the course."
        },
        {
            id: 1,
            question: "Are the courses suitable for beginners?",
            answer: "Absolutely! We have courses for all levels from beginners to advanced. You can filter courses by level, so whether you’re starting from scratch or building on existing skills, there’s a course for you."
        },
        {
            id: 2,
            question: "Can I access my courses offline?",
            answer: "Yes, you can access your courses offline. You can download the course materials and study at your convenience."
        },
        {
            id: 3,
            question: "How can I know my level of knowledge?",
            answer: "You can take our skill quiz to gauge your level of knowledge. The quiz will provide you with a score and a breakdown of your strengths and weaknesses."
        },
        {
            id: 4,
            question: "What if I need help during a course?",
            answer: "Our support team is available to help you with any questions or issues you may have. You can contact us via email or chat."
        },
    ];

    return (
        <section>
            <h1 className="font-extrabold ~text-[28px]/[48px] ~leading-[28px]/48px] font-sans text-[#1D293C] dark:text-[#F1F5F9] w-full text-center">
                Common Questions
            </h1>

            <div className="py-20 ~px-10/20 flex flex-col sm:flex-row sm:justify-around items-center sm:items-start space-y-10 sm:space-y-0">
                <div className='space-y-10'>
                    {questions.slice(0, 3).map((question) => (
                        <div
                            key={question.id}
                            className={`~w-[300px]/[468px] rounded-lg p-4 ${openQuestionId[question.id] ? 'bg-[#9FEF0080]' : 'dark:bg-[#212A34] bg-white'
                                } shadow-lg`}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="font-medium ~text-[14px]/[20px] ~leading-[14px]/[28px] text-[#1D293C] dark:text-[#CBD5E1]">
                                    {question.question}
                                </h3>
                                <button onClick={() => setOpenQuestionId({ ...openQuestionId, [question.id]: !openQuestionId[question.id] })}>
                                    <Icon
                                        icon={openQuestionId[question.id] ? "lsicon:minus-filled" : "gg:add"}
                                        width={32}
                                        height={32}
                                        color={openQuestionId[question.id] ? "#1D293C" : "#9FEF0080"}
                                    />
                                </button>
                            </div>
                            {openQuestionId[question.id] && (
                                <p className="mt-8 font-medium ~text-[14px]/[20px] ~leading-[14px]/[28px] text-[#1D293C] dark:text-[#CBD5E1]">
                                    {question.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
                <div className='space-y-10'>
                    {questions.slice(3, 5).map((question) => (
                        <div
                            key={question.id}
                            className={`~w-[300px]/[468px] rounded-lg p-4 ${openQuestionId[question.id] ? 'bg-[#9FEF0080]' : 'dark:bg-[#212A34] bg-white'
                                } shadow-lg`}
                        >
                            <div className="flex items-center justify-between">
                                <h3 className="font-medium ~text-[14px]/[20px] ~leading-[14px]/[28px] text-[#1D293C] dark:text-[#CBD5E1]">
                                    {question.question}
                                </h3>
                                <button onClick={() => setOpenQuestionId({ ...openQuestionId, [question.id]: !openQuestionId[question.id] })}>
                                    <Icon
                                        icon={openQuestionId[question.id] ? "lsicon:minus-filled" : "gg:add"}
                                        width={32}
                                        height={32}
                                        color={openQuestionId[question.id] ? "#1D293C" : "#9FEF0080"}
                                    />
                                </button>
                            </div>
                            {openQuestionId[question.id] && (
                                <p className="mt-8 font-medium ~text-[14px]/[20px] ~leading-[14px]/[28px] text-[#1D293C] dark:text-[#CBD5E1]">
                                    {question.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Question;
