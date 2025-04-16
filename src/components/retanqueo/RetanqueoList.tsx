import RetanqueoCard from "./RetanqueoCard";

type RetanqueoListProps = {
    cardsData: {
        name: string;
        status: string;
        date: string;
        amount: number;
        motive: string;
    }[]
}

const RetanqueoList = ({cardsData}: RetanqueoListProps) => {
  
    return (
      <div className="mt-5 md:mx-4">
        {/* Lista de tarjetas */}
        {cardsData.map((card, index) => (
          <RetanqueoCard
            key={index}
            name={card.name}
            status={card.status}
            date={card.date}
            amount={card.amount}
            motive={card.motive}
          />
        ))}
      </div>
    );
};
  
export default RetanqueoList;