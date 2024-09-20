import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
export const QuestionFlashCard = () => {
  const [arrayQuestion, setArrayQuestion] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/json/db.json`); // Thay URL của bạn
        const data = await response.json();
        setArrayQuestion(data.questions);
        setLoading(false); // Khi fetch xong, set loading về false
      } catch (error) {
        console.error("Error fetching questions:", error);
        setLoading(false); // Dù lỗi vẫn tắt loading
      }
    };
    fetchQuestions(); // Gọi hàm fetch khi component mount
  }, []);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [success, setSuccess] = useState(false);
  const [errror, setErrror] = useState(null);
  const handleClickNextQuestion = () => {
    if (currentQuestion < arrayQuestion.length - 1) {
      setAgain();
      setCurrentQuestion(currentQuestion + 1);
    } else {
      alert("Da hoan thanh bai ");
    }
  };
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  console.log(selectedAnswer);
  const checkAnswerQuestion = (value) => {
    const correctAnswer = arrayQuestion[currentQuestion].correct_answer
      .toLowerCase()
      .trim();
    const currentAnswer = value;
    if (currentAnswer === null) {
      alert("Bạn chưa trả lời câu hỏi");
    } else {
      if (correctAnswer === currentAnswer.toLowerCase().trim()) {
        setSuccess(true);
      } else {
        setErrror(true);
      }
    }
  };
  const setAgain = () => {
    setErrror(null);
    setSelectedAnswer(null);
    setSuccess(null);
  };
  return (
    <div className="container">
      {loading === true ? (
        "Loading"
      ) : (
        <>
          <div className="breadcrumb">
            <div className="breadcrumb__wrap">
              <NavLink to="/codelab/home" className="breadcrumb__item">
                <p className="breadcrumb__name">Trang chủ</p>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon/iconbread.svg`}
                  alt=""
                  className="breadcrumb__icon-arrow"
                />
              </NavLink>
              <NavLink to="/codelab/flashcard" className="breadcrumb__item">
                <p className="breadcrumb__name">FlashCard</p>
                <img
                  src={`${process.env.PUBLIC_URL}/images/icon/iconbread.svg`}
                  alt=""
                  className="breadcrumb__icon-arrow"
                />
              </NavLink>
              <NavLink
                to="/codelab/studyplant/frontEnd/flashcard_htmlcss"
                className="breadcrumb__item"
              >
                <p className="breadcrumb__name  breadcrumb__active ">
                  FlashCard HTML CSS
                </p>
              </NavLink>
            </div>
          </div>
          <div className="row flashcard__wrap">
            <div className="col-12">
              <div className="flashcard__title">
                <h1 className="flashcard__heading">FLASH CARD HTML CSS</h1>
                <p className="flashcard__desc">
                  Học đi đôi với hành , hãy cùng luyện tập nhiều hơn với chế độ
                  FlashCard để ôn luyện lại kiến thức một cách chỉnh chu nhất
                </p>
                <span className="flashcard__number">
                  {currentQuestion + 1}/{arrayQuestion.length}
                </span>
                <div className="flashcard__progress-wrapper">
                  <progress
                    className="flashcard__progress"
                    value={currentQuestion + 1}
                    max={arrayQuestion.length}
                  ></progress>
                </div>
                <div className="flashcard__question">
                  <h2
                    className="flashcard__question--heading"
                    data-id={arrayQuestion[currentQuestion].id}
                  >
                    {arrayQuestion[currentQuestion].question}
                  </h2>
                  <p className="flashcard__question--desc">
                    Chỉ chọn 1 đáp án đúng
                  </p>
                  <div className="flashcard__answer--list">
                    {arrayQuestion[currentQuestion].options.map(
                      (item, index) => {
                        return (
                          <div
                            key={index}
                            onClick={() => setSelectedAnswer(item)}
                            className={`flashcard__answer--item ${
                              selectedAnswer === item && "flashcard__active"
                            } ${
                              selectedAnswer === item && success === true
                                ? "flashcard__success"
                                : selectedAnswer === item && errror === true
                                ? "flashcard__error"
                                : ""
                            }`}
                          >
                            <p className="flashcard__answer">{item}</p>
                          </div>
                        );
                      }
                    )}
                  </div>
                  <div className="flashcard__submit--answer">
                    {success === true ? (
                      <>
                        <div className="flashcard__result">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/icon/result.svg`}
                            alt=""
                            className="flashcard__icon--result"
                          />
                          <p className="flashcard__result--answer">
                            {arrayQuestion[currentQuestion].explanation}
                          </p>
                        </div>
                        <button
                          className="flashcard__submit"
                          onClick={() => {
                            handleClickNextQuestion();
                          }}
                        >
                          CÂU HỎI TIẾP THEO
                        </button>
                      </>
                    ) : errror === true ? (
                      <>
                        <div className="flashcard__result">
                          <img
                            src={`${process.env.PUBLIC_URL}/images/icon/result.svg`}
                            alt=""
                            className="flashcard__icon--result"
                          />
                          <p className="flashcard__result--answer">
                            Xin lỗi ! bạn đã trả lời sai
                          </p>
                        </div>
                        <button
                          onClick={setAgain}
                          className="flashcard__submit"
                        >
                          LÀM LẠI
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => checkAnswerQuestion(selectedAnswer)}
                        className={`flashcard__submit ${
                          selectedAnswer ? "" : "flashcard__submit--default"
                        }`}
                        disabled={!selectedAnswer} // Vô hiệu hóa nút khi chưa có đáp án được chọn
                      >
                        TRẢ LỜI
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
