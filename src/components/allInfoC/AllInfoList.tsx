import React from 'react'
import { Flex } from '../Banner/StyledComponents'
import AllInfoListItem from './AllInfoListItem'
import AllInfoListItem2 from './AllInfoListItem2'
import { AllInfoListTitle, AllInfoListBlock, AllInfoListIs, AllInfoListWrap, AllInfoListIs2, AllInfoListFlex } from './AllInfoStyledComponents'
import useCompany, { Company } from '../../hooks/useCompany';
import { Link } from 'react-router-dom'

const AllInfoList: React.FC<{id: number}> = ({id}) => {
    const [info, setInfo] = React.useState([
        ['Ценная бумага','Акция простая'],
        ['Торговые символы', 'MAIR'],
        ['Отрасль', 'Воздушный транспорт'],
        ['Вид деятельности', 'Наземное аэропортовое обеспечение воздушных судов и обслуживание пассажиров и багажа'],
        ['Дата прохождения листинга', '2008-07-22 00:00:00'],
        ['ФИО руководителя', 'Шаршеев Бакыт Октябрович'],
        ['Должность руководителя', 'Председатель Правления'],
        ['Адрес', '720062, г.Бишкек, аэропорт "Манас"'],
        ['Телефон / Факс', '69 30 17, 69 31 09'],
        ['Аудитор', 'ЗАО "В. Якобс-Аудит"'],
        ['Регистратор', 'ОсОО "Реестродержатель Медина"'],
        ['Маркет-мейкер', 'Нет'],
    ])

    const [info2, setInfo2] = React.useState([
        ['Бухгалтерский Баланс', ''],
        ['Листинговый проспект', 'Архив'],
        ['Отчет о финансовых результатах', 'Архив'],
        ['Отчет о движении денежных средств', 'Архив'],
        ['Отчет об изменениях в капитале', 'Архив'],
        ['Аудиторское заключение', 'Архив'],
        ['Кодекс корпоративного управления', 'Архив'],
    ])

    const company = useCompany(id);
    const editUri = "/admin/add/" + (company ? company.id : "");
    return (
        <AllInfoListBlock>
            <AllInfoListTitle>{company && company.name}	{company && company.paper} <Link to={editUri}>Edit</Link> </AllInfoListTitle>

            <AllInfoListWrap>
                <AllInfoListFlex>
                    <AllInfoListIs>
                        <AllInfoListItem name="Ценная бумага" value={company ? company.paper : ""}/>
                        <AllInfoListItem name="Торговый символ" value={company ? company.symbol : ""}/>
                        <AllInfoListItem name="Отрасаль" value={company ? company.branch : ""}/>
                        <AllInfoListItem name="Вид деятельности" value={company ? company.kind : ""}/>
                        <AllInfoListItem name="Дата листинга" value={company ? company.createdAt : ""}/>
                        <AllInfoListItem name="ФИО Руководителя" value={company ? company.owner : ""}/>
                        <AllInfoListItem name="Должность руководителя" value={company ? company.ownerRank : ""}/>
                        <AllInfoListItem name="Адрес" value={company ? company.address : ""}/>
                        <AllInfoListItem name="Телефон" value={company ? company.phone : ""}/>
                        <AllInfoListItem name="Аудитор" value={company ? company.auditor : ""}/>
                        <AllInfoListItem name="Регистратор" value={company ? company.registrator : ""}/>
                        <AllInfoListItem name="Маркет-мейкер" value={company ? company.marketmaker : ""}/>
                    </AllInfoListIs>

                    <AllInfoListIs2>
                        {info2.map((item, index) => {
                            return <AllInfoListItem2 key={index} name={item[0]} value={item[1]}/>
                        })}
                    </AllInfoListIs2>
                </AllInfoListFlex>

            </AllInfoListWrap>
            

        </AllInfoListBlock>
    )
}

export default AllInfoList
