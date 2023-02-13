import { useState, useRef, useEffect } from 'react';
import { mobileBG, desktopBG, cardLogo } from './assets';
import { Form, Complete } from './components';

function App() {
  const [cardDetails, setCardDetails] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
  });
  const [validation, setValidation] = useState({
    validName: '',
    validNumber: '',
    validExp: '',
    validCvc: '',
  });

  const [empty, setEmpty] = useState(false);
  const [correctFormat, setCorrectFormat] = useState(false);
  const [canSumbit, setCanSumbit] = useState(false);

  const prevName = useRef();
  const prevNumber = useRef();
  const prevMonth = useRef();
  const prevYear = useRef();
  const prevCvc = useRef();

  useEffect(() => {
    prevName.current = cardDetails.name;
  }, [cardDetails.name]);
  useEffect(() => {
    prevNumber.current = cardDetails.number;
  }, [cardDetails.number]);
  useEffect(() => {
    prevMonth.current = cardDetails.month;
  }, [cardDetails.month]);
  useEffect(() => {
    prevYear.current = cardDetails.year;
  }, [cardDetails.year]);
  useEffect(() => {
    prevCvc.current = cardDetails.cvc;
  }, [cardDetails.cvc]);

  function handleChange(e) {
    const { name, value } = e.target;
    if (name === 'number') {
      setCardDetails((prev) => ({
        ...prev,
        [name]: value
          .replace(/\s/g, '')
          .replace(/(\d{4})/g, '$1 ')
          .trim(),
      }));
    } else {
      setCardDetails((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (cardDetails.name === '') {
      setEmpty(true);
      setValidation((prev) => ({
        ...prev,
        validName: 'Enter name',
      }));
      return;
    } else {
      setEmpty(false);
      setValidation((prev) => ({
        ...prev,
        validName: '',
      }));
    }

    if (cardDetails.number === '') {
      setEmpty(true);
      setValidation((prev) => ({
        ...prev,
        validNumber: "Can't be blank",
      }));
      return;
    } else {
      setValidation((prev) => ({
        ...prev,
        validNumber: '',
      }));
      setEmpty(false);
    }

    let cardNum = cardDetails.number;
    cardNum = cardNum.split(' ').join('');
    Number(cardNum);

    if (isNaN(cardNum)) {
      setCorrectFormat(false);
      setValidation((prev) => ({
        ...prev,
        validNumber: 'Wrong format, numbers only',
      }));
      return;
    } else {
      setValidation((prev) => ({
        ...prev,
        validNumber: '',
      }));
      setCorrectFormat(true);
    }

    if (cardDetails.month === '' || cardDetails.year === '') {
      setEmpty(true);
      setValidation((prev) => ({
        ...prev,
        validExp: "Can't be blank",
      }));
      return;
    } else {
      setValidation((prev) => ({
        ...prev,
        validExp: '',
      }));
      setEmpty(false);
    }

    if (cardDetails.cvc === '') {
      setEmpty(true);
      setValidation((prev) => ({
        ...prev,
        validCvc: "Can't be blank",
      }));
      return;
    } else {
      setValidation((prev) => ({
        ...prev,
        validCvc: '',
      }));
      setEmpty(false);
    }

    setCardDetails({
      name: '',
      number: '',
      month: '',
      year: '',
      cvc: '',
    });
    setCanSumbit(true);
  }

  return (
    <section className="mx-auto max-w-[1440px]">
      <div className="absolute -z-50 w-full">
        <img src={desktopBG} alt="" className="hidden lg:block lg:h-screen" />
        <img src={mobileBG} alt="" className="h-[250px] w-full lg:hidden" />
      </div>
      <div className="mx-auto grid h-full max-w-7xl grid-cols-1 items-center gap-8 px-5 lg:h-screen  lg:grid-cols-2">
        <div className="relative mx-auto mt-6 flex max-w-full flex-col-reverse">
          <div className="front-card absolute -bottom-[102px] -left-1 z-50 flex h-[180px] w-[300px] flex-col justify-between rounded-lg p-5 shadow-xl lg:top-7 lg:left-12 lg:h-[220px] lg:w-[400px] lg:shadow-none xl:left-14">
            <img
              src={cardLogo}
              alt="credit card logo"
              className="h-10 w-16 object-contain lg:h-12 lg:w-20"
            />
            <div className="text-light-violet">
              <p className="text-[18px] tracking-widest lg:text-2xl">
                {prevNumber.current}
              </p>
              <div className="mt-2 flex justify-between text-sm lg:mt-5">
                <p className="uppercase tracking-wider">{prevName.current}</p>
                <p>
                  {prevMonth.current}/{prevYear.current}
                </p>
              </div>
            </div>
          </div>
          <div className="back-card relative ml-12 h-[180px] w-[300px] rounded-lg lg:mt-[290px] lg:ml-[100px] lg:h-[220px] lg:w-[400px] xl:ml-[150px]">
            <p className="absolute top-[77px] right-6 text-light-violet lg:top-[97px] lg:right-12">
              {prevCvc.current}
            </p>
          </div>
        </div>
        {!canSumbit ? (
          <Form
            onFormSubmit={handleSubmit}
            cardDetails={cardDetails}
            validation={validation}
            onChange={handleChange}
            empty={empty}
          />
        ) : (
          <Complete />
        )}
      </div>
    </section>
  );
}

export default App;
