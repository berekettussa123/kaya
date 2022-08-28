import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import NotAnswered from '../CardQuestions/NotAnswered';
import Question from '../CardQuestions/Question';

export default function CardQuestionsArea() {
  const [questions, setQuestions] = useState();
  const [resources, setResources] = useState();
  const [selectedResource, setSelectedResource] = useState();
  const [pending, setPending] = useState(true);
  const [answered, setAnswered] = useState(false);
  const [show, setShow] = useState(false);
  const { user } = useContext(AuthContext);
  const handleClick = () => {
    setShow(true);
  };
  const [pendingallQuestions, setpendingAllQuestions] = useState({
    items2: [],
    currentItem2: null,
    index2: 0,
  });
  const [state, setState] = useState({
    items: [],
    currentItem: null,
    index: 0,
  });
  const [allQuestions, setAllQuestions] = useState({
    items: [],
    currentItem: null,
    index: 0,
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getTrendingResources/${user.success.partnerId}`
      );
      setResources(res.data);
      // setState(res.data);
    };

    fetchPosts();
  }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getQuestionsList/${user.success.partnerId}`
      );
      setState({ items: res.data, currentItem: res.data[0], index: 0 });
      setAllQuestions({ items: res.data, currentItem: res.data[0], index: 0 });
      setpendingAllQuestions({ items2: res.data, currentItem2: res.data[0], index2: 0 });
      // setState(res.data);
    };

    fetchPosts();
  }, []);

  // setAllQuestions(allQuestions.filter((n)=>n !==item.answered))

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getQuestionsList/${user.success.partnerId}`
      );
      // setAllQuestions(res.data);
      // setpendingAllQuestions(res.data);
      // setState(res.data);
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    // eslint-disable-next-line array-callback-return
    allQuestions?.items?.map((item) => {
      if (item.answer === "" || item.answer === null) {
        setAllQuestions({
          currentItem: allQuestions.currentItem,
          index: allQuestions.index,
          items:
            allQuestions.items.includes(item) &&
            allQuestions.items.filter((n) => n !== item),
        });
        // console.log(item)
      }
      
    });
    // eslint-disable-next-line array-callback-return
    pendingallQuestions?.items2?.map((item) => {
      if (!(item.answer === '' || item.answer === null)) {
        setpendingAllQuestions({
          currentItem2: pendingallQuestions.currentItem2,
          index2: pendingallQuestions.index2,
          items2:
          pendingallQuestions.items2.includes(item) &&
          pendingallQuestions.items2.filter((n) => n !== item),
        });
        // console.log(item)
      }
    });
    // eslint-disable-next-line array-callback-return
    // pendingallQuestions?.map((item) => {
    //   if (item.answer) {
    //     setpendingAllQuestions(
    //       pendingallQuestions?.includes(item) &&
    //         pendingallQuestions?.filter((n) => n !== item)
    //     );
    //     // console.log(item)
    //   }
    // });
  }, [
    allQuestions.currentItem,
    allQuestions.index,
    allQuestions.items,
    pendingallQuestions.currentItem2,
    pendingallQuestions.index2,
    pendingallQuestions.items2,
  ]);
  useEffect(() => {
    // console.log(pendingallQuestions.items2?.length);
    // console.log(pendingallQuestions);
    // console.log(allQuestions);
  }, [allQuestions, pendingallQuestions]);

  useEffect(() => {
    // setpendingAllQuestions(allQuestions)
    //  console.log(state.currentItem)
    //  console.log(state.index)
  }, [allQuestions]);

  const handleNext = () => {
    const { index, items } = allQuestions;
    const { index2, items2 } = pendingallQuestions;
    // const { index, items } = state;
    // const nextQuestion = index + 1;
    const nextQuestion2 = pendingallQuestions.index2 < pendingallQuestions.items2?.length-1 ? index2 + 1 :index2;
    const nextQuestion = allQuestions.index < allQuestions.items?.length-1 ? index + 1 :index;

    setAllQuestions({
      items: items,
      currentItem: items[nextQuestion],
      index: nextQuestion,
    });
    // setState({
    //   items: items,
    //   currentItem: items[nextQuestion],
    //   index: nextQuestion,
    // });
    setpendingAllQuestions({
      items2: items2,
      currentItem2: items2[nextQuestion2],
      index2: nextQuestion2,
    });
    setShow(false);
  };
  const handlePrev = () => {
    const { index, items } = allQuestions;
    const { index2, items2 } = pendingallQuestions;
    // const { index, items } = state;
    // const nextQuestion = index - 1;
    const nextQuestion2 = pendingallQuestions.index2 >0 ? index2 - 1 :index2;
    const nextQuestion = allQuestions.index >0 ? index - 1 :index;

    setAllQuestions({
      items: items,
      currentItem: items[nextQuestion],
      index: nextQuestion,
    });
    // setState({
    //   items: items,
    //   currentItem: items[nextQuestion],
    //   index: nextQuestion,
    // });
    setpendingAllQuestions({
      items2: items2,
      currentItem2: items2[nextQuestion2],
      index2: nextQuestion2,
    });
    setShow(false);
  };

  useEffect(() => {
    console.log(pendingallQuestions.currentItem2);
  },[pendingallQuestions.currentItem2])
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/getQuestionsList/${user.success.partnerId}`
      );
      setQuestions(res.data);
    };

    fetchPosts();
  }, [questions]);

  const handlePending = () => {
    setAnswered(false);
    setPending(true);
  };
  const handleAnsered = () => {
    setPending(false);
    setAnswered(true);
  };
 

  return (
    <div className="CardQuestionsAreaContainer">
      <div className="questionTitleContainer">
        <div className="questionAsked">Questions Asked</div>
        <div className="buttonContainerSurvey">
          <div
            className="centerButton3 centerbtn centerbtnQ centerbtn1"
            onClick={handlePending}
          >
            Pending
          </div>
          <div
            className="centerButton3 centerbtn centerbtnQ centerbtn2"
            onClick={handleAnsered}
          >
            Answered
          </div>
        </div>
      </div>
      {pending && (
        <Question
          pending={pending}
          setSelectedResource={setSelectedResource}
          selectedResource={selectedResource}
          resources={resources}
          show={show}
          setShow={setShow}
          handleClick={handleClick}
          state={pendingallQuestions}
          questions={questions}
          current={pendingallQuestions.currentItem2}
          />
          )}
      {answered && (
        <NotAnswered
        state={allQuestions}
        current={allQuestions.currentItem}
          answered={answered}
          setSelectedResource={setSelectedResource}
          selectedResource={selectedResource}
          resources={resources}
          show={show}
          setShow={setShow}
          handleClick={handleClick}
          questions={questions}
        />
      )}
      <div className="buttonContainerSurvey nextbtn">
        <div
          className="centerButton3 centerbtn centerbtn2 "
          onClick={handlePrev}
        >
          Prev
        </div>
        <div
          className="centerButton3 centerbtn centerbtn2 "
          onClick={handleNext}
        >
          Next
        </div>
      </div>
    </div>
  );
}
