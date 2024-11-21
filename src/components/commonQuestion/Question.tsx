import React from 'react'

const Question = () => {
    const questions = [
        {
            id: 0,
            question: "Are the courses self-paced or live?",
            answer: "The courses are self-paced, meaning you can study at your own pace and learn at your own speed. The live sessions are optional and will help you with any questions you may have during the course."
        },
        {
            id: 1,
            question: "Can I access my courses offline?",
            answer: "Yes, you can access your courses offline. You can download the course materials and study at your convenience."
        },
        {
            id: 2,
            question: "What if I need help during a course?",
            answer: "Our support team is available to help you with any questions or issues you may have. You can contact us via email or chat."
        },
        {
            id: 3,
            question: "Are the courses suitable for beginners?",
            answer: "Absolutely! We have courses for all levels from beginners to advanced. You can filter courses by level, so whether you’re starting from scratch or building on existing skills, there’s a course for you."
        },
        {
            id: 4,
            question: "How can i know my level of knowledge?",
            answer: "You can take our skill quiz to gauge your level of knowledge. The quiz will provide you with a score and a breakdown of your strengths and weaknesses."
        }
    ]
    
    return (
        <section>
            <h1>Common questions</h1>
            <div>
                {questions.map((question) => (
                    <div key={question.id}>
                        <h3>{question.question}</h3>
                        <p>{question.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Question