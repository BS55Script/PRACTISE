const questions = [
    
    {
        question: "1. Who is the first King of unified Nepal?",
        options: ["Prithvi Narayan Shah", "Mahendra Shah", "Tribhuvan Shah", "Gyanendra Shah"],
        answer: "Prithvi Narayan Shah",
        info: "Prithvi Narayan Shah unified Nepal in the 18th century and laid the foundation for modern Nepal."
    },
    {
        question: "2. What is the national flower of Nepal?",
        options: ["Rose", "Lotus", "Lali Gurans", "Sunflower"],
        answer: "Lali Gurans",
        info: "Lali Gurans (Rhododendron) is native to the Himalayan region and blooms during spring."
    },
    {
        question: "3. Who wrote the national anthem of Nepal?",
        options: ["Laxmi Prasad Devkota", "Byakul Maila", "Madhav Prasad Ghimire", "Bhupi Sherchan"],
        answer: "Byakul Maila",
        info: "Byakul Maila (Pradeep Kumar Rai) penned the new anthem after Nepal became a republic in 2007."
    },
    {
        question: "4. Who is known as the Iron Man of Nepal?",
        options: ["B.P. Koirala", "Ganesh Man Singh", "Madan Bhandari", "Subarna Shamsher"],
        answer: "Ganesh Man Singh",
        info: "Ganesh Man Singh led the 1990 People's Movement and fought for democracy in Nepal."
    },
    {
        question: "5. Who was the first elected Prime Minister of Nepal?",
        options: ["B.P. Koirala", "Puspa Kamal Dahal", "Sher Bahadur Deuba", "Madan Bhandari"],
        answer: "B.P. Koirala",
        info: "B.P. Koirala became Nepal's first democratically elected Prime Minister in 1959."
    },
    {
        question: "6. What is the highest mountain peak in Nepal?",
        options: ["K2", "Annapurna", "Mount Everest", "Dhaulagiri"],
        answer: "Mount Everest",
        info: "Mount Everest is the tallest mountain in the world, standing at 8,848 meters."
    },
    {
        question: "7. Who is the founder of Buddhism born in Nepal?",
        options: ["Siddhartha Gautama", "Mahatma Gandhi", "Dalai Lama", "Krishna"],
        answer: "Siddhartha Gautama",
        info: "Siddhartha Gautama, who later became the Buddha, was born in Lumbini, Nepal."
    },
    {
        question: "8. What is the currency of Nepal?",
        options: ["Nepalese Dollar", "Nepalese Rupee", "Indian Rupee", "Yuan"],
        answer: "Nepalese Rupee",
        info: "The Nepalese Rupee (NPR) is the official currency, issued by Nepal Rastra Bank."
    },
    {
        question: "9. When was Nepal declared a Federal Democratic Republic?",
        options: ["2008", "1990", "2015", "2005"],
        answer: "2008",
        info: "Nepal became a Federal Democratic Republic on May 28, 2008, abolishing its monarchy."
    },
    {
        question: "10. What is the official language of Nepal?",
        options: ["Hindi", "English", "Nepali", "Maithili"],
        answer: "Nepali",
        info: "Nepali, also known as Gorkhali, is the official language and is spoken widely across the country."
    },
    {
        question: "11. What is the largest lake in Nepal?",
        options: ["Rara Lake", "Phewa Lake", "Tilicho Lake", "Begnas Lake"],
        answer: "Rara Lake",
        info: "Rara Lake is the largest lake in Nepal, located in the remote Mugu District."
    },
    {
        question: "12. Who is considered the father of modern education in Nepal?",
        options: ["Junga Bahadur Rana", "Jaya Prithvi Bahadur Singh", "Chandra Shamsher", "Madan Bhandari"],
        answer: "Jaya Prithvi Bahadur Singh",
        info: "Jaya Prithvi Bahadur Singh is credited with promoting education and introducing modern educational practices in Nepal."
    },
    {
        question: "13. Who was the first woman to climb Mount Everest from Nepal?",
        options: ["Pasang Lhamu Sherpa", "Phurba Sherpa", "Temba Sherpa", "Lakpa Sherpa"],
        answer: "Pasang Lhamu Sherpa",
        info: "Pasang Lhamu Sherpa became the first Nepali woman to summit Everest in 1993."
    },
    {
        question: "14. In which year did Nepal join the United Nations?",
        options: ["1955", "1960", "1945", "1990"],
        answer: "1955",
        info: "Nepal became a member of the United Nations on December 14, 1955."
    },
    {
        question: "15. What is the most popular festival in Nepal?",
        options: ["Dashain", "Tihar", "Holi", "Chhath"],
        answer: "Dashain",
        info: "Dashain is Nepal's longest and most celebrated festival, symbolizing the victory of good over evil."
    },
    {
        question: "16. What is the capital city of Nepal?",
        options: ["Kathmandu", "Pokhara", "Biratnagar", "Lalitpur"],
        answer: "Kathmandu",
        info: "Kathmandu is Nepal's capital and largest city, known for its rich history and cultural heritage."
    },
    {
        question: "17. Who is known as the 'People’s Leader' in Nepal?",
        options: ["Madan Bhandari", "Girija Prasad Koirala", "Puspa Kamal Dahal", "Subash Chandra Nembang"],
        answer: "Madan Bhandari",
        info: "Madan Bhandari was a popular leader of the Nepal Communist Party and played a crucial role in Nepal's political transformation."
    },
    {
        question: "18. What is the traditional dress of men in Nepal?",
        options: ["Sari", "Kurta", "Daura Suruwal", "Dhoti"],
        answer: "Daura Suruwal",
        info: "Daura Suruwal is the traditional attire for men in Nepal, symbolizing the nation's heritage."
    },
    {
        question: "19. Which river is the longest in Nepal?",
        options: ["Koshi", "Gandaki", "Karnali", "Bagmati"],
        answer: "Karnali",
        info: "The Karnali River is the longest river in Nepal, flowing from the Tibetan Plateau through the Himalayas."
    },
    {
        question: "20. Who is the first woman President of Nepal?",
        options: ["Bidhya Devi Bhandari", "Onsari Gharti", "Sushila Koirala", "Durga Thapa"],
        answer: "Bidhya Devi Bhandari",
        info: "Bidhya Devi Bhandari was elected as Nepal's first female president in 2015."
    },
    {
        question: "21. Where was goddess Sita born?",
        options: ["Kathmandu", "Ayodhya", "Sitamarhi", "Janakpur"],
        answer: "Janakpur",
        info: "Janakpur, in southern Nepal, is believed to be the birthplace of Goddess Sita."
    },
    {
        question: "22. Who is the father of the Nation of India?",
        options: ["Rahul Gandhi", "Devdhar Gandhi", "Mahatma Gandhi", "Narendra Modi"],
        answer: "Mahatma Gandhi",
        info: "Mahatma Gandhi, known for his non-violent resistance, is regarded as the Father of the Nation in India."
    },
    {
        question: "23. Who is known as the father of the computer?",
        options: ["Charles Babbage", "Michael Faraday", "Edwin Aldrin", "Donald Trump"],
        answer: "Charles Babbage",
        info: "Charles Babbage is considered the father of the computer for his concept of the programmable machine."
    },
    {
        question: "24. Which is the longest river in the world?",
        options: ["Bagmati", "Ganga", "Nile", "Thames"],
        answer: "Nile",
        info: "The Nile River, flowing through northeastern Africa, is the longest river in the world."
    },
    {
        question: "25. Who is known as the father of science?",
        options: ["Galileo Galilei", "Michael Faraday", "Isaac Newton", "Thomas Alva Edison"],
        answer: "Galileo Galilei",
        info: "Galileo Galilei is often called the 'Father of Modern Science' for his contributions to physics and astronomy."
    }
    
     
     

]

let score =0;

function askQuestion(questionObj){
    const{ question, options, answer, info} = questionObj;
    let optionsText = options.map((options,index) => `${index +1}.${options}`).join('\n');
    let userAns = prompt(`${question}\n${optionsText}`);
    let userOptionIndex = parseInt(userAns) - 1;
    if (userOptionIndex >= 0 && userOptionIndex < options.length) {
        let userAnswerText = options[userOptionIndex];
        if (userAnswerText === answer) {
            alert("Correct answer!!");
            score++;
        } else {
            alert(`Incorrect! The correct answer is: ${answer}` + '\n' + info);
           
           

        }
    } else {
        alert("Invalid choice. Please select a valid option number.");
    }

  
}
for (const questionObj of questions) {
    askQuestion(questionObj);
}


alert(`Quiz finished! Your score is ${score} out of ${questions.length}.`);
