import { useState } from "react";
import styles from "./HowIFuckYou.module.css";

const HowIFuckYou = (props) => {
  const [question, setQuestion] = useState(0);

  const [password, setPassword] = useState(null);

  if (password === "жопа") {
    return (
      <div className={styles.howIFuckYou}>
        {question === 4 || question === 5 || question === 6 ? (
          <h5>Да, пиздец&#128523;</h5>
        ) : null}
        {question === 0 ? (
          <div>
            <h3>Любишь меня?</h3>
            <button
              onClick={() => {
                setQuestion(1);
              }}
            >
              Да!
            </button>
          </div>
        ) : null}
        {question === 1 ? (
          <div>
            <h3>Скучаешь по мне?</h3>
            <button
              onClick={() => {
                setQuestion(2);
              }}
            >
              Да!
            </button>
          </div>
        ) : null}
        {question === 2 ? (
          <div>
            <h3>Хочешь меня?</h3>
            <button
              onClick={() => {
                setQuestion(3);
              }}
            >
              Да!
            </button>
          </div>
        ) : null}
        {question === 3 ? (
          <div>
            <h3>Пиздец!</h3>
            <button
              onClick={() => {
                setQuestion(4);
              }}
            >
              Пиздец?
            </button>
          </div>
        ) : null}

        {question >= 4 ? (
          <div>
            <span>Надеюсь, ты готова</span>
            <br />
            <span></span>
            <br />
            <span>Готова к тому, что сейчас прочитаешь</span>
            <br />
            <span>И к тому, что будет совсем скоро</span>
            <br />
            <span></span>
            <br />
            <span></span>
            <br />
            <span></span>
            <br />
            {question === 4 ? (
              <div>
                <span>А что будет скоро?</span>
                <br />
                <button
                  onClick={() => {
                    setQuestion(5);
                  }}
                  className={styles.whatButton}
                >
                  Что?
                </button>
              </div>
            ) : null}
            {question === 5 || question === 6 || question === 7 ? (
              <>
                <span className={styles.povestvovanie}>
                  Уже сейчас каждый день мы сходим с ума от жажды друг друга
                </span>
                <br />
                <span className={styles.povestvovanie}>
                  И как только я выйду из поезда, это желание будет невыносимым
                </span>
                <br />
                <span className={styles.povestvovanie}>
                  С этим ебанутым невероятно сильным желанием мы будем ехать
                  домой
                </span>
                <br />
                <span className={styles.povestvovanie}>
                  Вся дорога будет наполнена провокациями
                </span>
                <br />
                <span className={styles.povestvovanie}>
                  Когда мы наконец приедем, начнётся пиздец
                </span>
                <br />
                <span className={styles.povestvovanie}></span>
                <br />
                <span className={styles.povestvovanie}></span>
                <br />
                <span className={styles.povestvovanie}></span>
                <br />
                {question === 5 ? (
                  <>
                    <span className={styles.povestvovanie}>
                      Ты наверное уже хочешь, чтобы я перешёл ближе к делу?
                    </span>
                    <br />
                    <button
                      onClick={() => {
                        setQuestion(6);
                      }}
                      className={styles.whatButton}
                    >
                      Да!
                    </button>
                  </>
                ) : null}
                {question === 6 ? (
                  <>
                    <span className={styles.povestvovanie}>
                      Хорошо, значит слушай
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      Уже на пороге ты будешь очень-очень мокрая, в моих штанах
                      будет невероятно тесно, а наши ручки уже совсем не будут
                      нас слушаться
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      Конечно, после того, как я прижму тебя к стенке в
                      коридоре, слегка придушу и поцелую, мне придётся собрать
                      всю свою волю в кулак и сходить в душ, чтобы уже совсем
                      скоро собрать в кулак твои волосы
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      К тому моменту, как я выйду из душа, ты уже будешь сидеть
                      в своём новом ахуенном белье, которое станет для меня
                      невероятным сюрпризом
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      Ахуев от твоей красоты, я снова тебя поцелую, возьму за
                      шею и посажу перед собой на колени, ты наконец сможешь
                      расстегнуть молнию моих джинс, стянешь их с меня и
                      возьмёшь в свой тёплый слюнявый ротик мой большой член,
                      который так давно мечтает о том, чтобы этот момент
                      поскорее наступил
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      И когда я уже больше не смогу держаться, конечно, кончу
                      прямо тебе в рот и ты, как послушная девочка, всё
                      проглотишь
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      Поверь, я также сильно буду хотеть как можно скорее войти
                      в тебя, закинув ножки на плечи, но перед этим ты сядешь
                      передо мной и, раздвинув ножки, облизав свои пальчики и
                      войдя в себя, заставишь меня ахуеть сильнее, чем
                      когда-либо
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      Не знаю, на сколько меня хватит, возможно уже через секунд
                      30 я сорвусь с места, засуну в твой ротик уже два своих
                      пальчика и присоединю их к твоим, второй рукой держа тебя
                      за шею
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      Спустя ещё небольшое количество времени, мне придётся
                      прервать твои нежные тёплые стоны и заткнуть тебя своим
                      членом
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      И когда на нём окажется достаточно твоих слюней, я положу
                      тебя на спинку, снова поцелую и спрошу, готова ли ты к
                      разъёбу
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      Но нет, я не войду в тебя как только получу положительный
                      ответ, ведь не только ты можешь меня дразнить
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      Перед этим я буду очень долго водить ручки по всему твоему
                      телу и целовать тебя, чтобы ты сходила с ума от
                      предвкушения
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      Я буду целовать и кусать твои твёрдые соски, душить тебя,
                      и когда наконец наиграюсь, я закину твои ножки себе на
                      плечи, крепко схвачу твои ручки, скрещу их у тебя за
                      головой и глубоко войду в твою ахуенную мокрую киску
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      Да, я буду быстро и глубоко входить в тебя, наслаждаясь
                      твоими громкими стонами
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      И после того, как я кончу тебе на животик и вытру с него
                      всю сперму, ты встанешь передо мной раком и я снова в тебя
                      войду
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      Я буду трахать тебя снова, и снова, пока мы совсем не
                      устанем
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      И когда этот момент всё же наступит, мы сможем лечь на
                      кровать, выдохнуть и начать говорить о том, как сильно
                      друг по другу скучали
                    </span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}></span>
                    <br />
                    <span className={styles.povestvovanie}>
                      Я предупреждал)
                    </span>
                    <br />
                  </>
                ) : null}
                <span className={styles.povestvovanie}></span>
                <br />
                <span className={styles.povestvovanie}></span>
                <br />
              </>
            ) : null}
            {}
            <span></span>
            <br />
          </div>
        ) : null}
        <span></span>
        <br />
        <span></span>
        <br />
        <span></span>
        <br />
        <p className={styles.lastSpan}></p>
        <br />
      </div>
    );
  } else {
    return (
      <div className={styles.howIFuckYou}>
        <h3>Пароль:</h3>
        <input
          onChange={(e) => {
            setPassword(e.currentTarget.value);
          }}
        />
        <br />
      </div>
    );
  }
};

export default HowIFuckYou;
