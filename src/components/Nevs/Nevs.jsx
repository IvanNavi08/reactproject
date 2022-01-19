import React from "react";
import s from "./Nevs.module.css"

const Nevs = (props) => {
    return (
        <div>
            <h1 className={s.nevs}>
                Interesting news
            </h1>
            <div className={s.Nev}>
                <p>А чи знали ви, що на роль головного леходія фільму <a href={"https://ru.wikipedia.org/wiki/%D0%" +
                    "9C%D1%81%D1%8" +
                    "2%D0%B8%D1%82%D0%B5%D0%BB%D0%B8" +
                    ":_%D0%92%D0%BE%D0%B9%D0%BD%D0%B0_%D0%B1%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D0%B5%D1%8" +
                    "7%D0%BD%D0%BE%D1%81%D1%82%D0%B8"}>
                    Месники "Війна Нескінченості"</a> <a href={"https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%BD%D0%BE%D1%81_(%D" +
                    "0%9A%D0%B8%D0%BD%D0%B5%D0%BC%D0%B0%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D" +
                    "1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_Marvel)"}>Таноса</a>.
                    Голова <a href={"https://ru.wikipedia.org/wiki/Marvel_Studios"}>Marvel Studio,</a>
                    <a href={"https://ru.wikipedia.org/wiki/" +
                        "%D0%A4%D0%B0%D0%B9%D0%B3%D0%B8,_%D0%9A%D0%B5%D0%B2%D0%B8%D0%BD"}> Кевін Файги</a>

                    <img src="https://s3.vcdn.biz/static/f/2316556011/image.jpg" className={s.foto1}/>,
                    хотів бачити не кого іншого, як свого кумира, бодібілдера, та переможця 8-ї битви екстрасенців.
                    <strong> <a href={"https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9,_%D0%90%D0%BB" +
                        "%D0%B5%D0%BA%D1%81" +
                        "%D0%B0%D0%BD%D0%B4%D1%80_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80%D0%BE%D0%B2%D0" +
                        "%B8%D1%87"}>Олександра Невського</a> </strong>
                    <img src="https://instagrammi.ru/wp-content/uploads/aleksandr-nevskiy.jpg" className={s.foto2}/>
                    Окрім цього, голова Marvel Studio добавив, що він сильно захоплюється вміннями свого кумира.
                    Як зазначив Кевін Файгі в одному з авторитетних видань
                    газети <strong>НЕВСЬКИЙ-ШВАРЦ. </strong>
                    <q>
                        Для мене Олександер Невський завжди був та залишатиметься однієї із ключових фігур світового
                        кіноматографу
                    </q>
                </p>

                <p className={s.p2}> Ось фото того, як би міг виглядати видатний актор Олександер Невський в образі Таноса.
                    <img src="https://cdnimg.rg.ru/img/content/194/40/38/Bez_imeni-1_t_650x433.jpg"
                         className={s.foto3}/>
                </p>

                <p> Однак Олександе Невский від цієї ролі відмовився, аргументуючи це тим, що у фільмах він звик грати
                    позитивних персонажів.
                    <img src="https://cdnimg.rg.ru/img/content/214/75/96/umrpi4lv_t_650x433.jpg" className={s.foto4}/>
                    Також відомо, що на даний час Олександер Невський виде активну розробку свого
                    нового фільма, який має стати його відповідю на Месники студії <a href={"https://ru.wikipedia.org/wiki/Marvel_Comics"}>MARVEL</a>. Подробиці даної стрічки
                    покищо
                    не розголошується.
                <p className={s.p3}> Однак відомо те, що Олександер Невський відіграє одну із ключових ролей у даному фільмі.
                    Фанатів Олександра Невського не аби як втішила ця новина).
                    А найсміливіші з фані навіть спробували створити постер нового фільму.
                </p>
                    <img src="https://cs11.pikabu.ru/post_img/big/2019/03/25/10/1553531746137592732.jpg" className={s.foto5}/>

                </p>
            </div>
        </div>

    )
}
export default Nevs;