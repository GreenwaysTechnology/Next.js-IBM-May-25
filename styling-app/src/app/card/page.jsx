import { Card } from "../components/Card";

const cardData = [{
    title: 'Card-1',
    description: 'This is first card'
},
{
    title: 'Card-2',
    description: 'This is second card'
}, {
    title: 'Card-3',
    description: 'This is third card'
},
{
    title: 'Card-3',
    description: 'This is third card'
},
{
    title: 'Card-3',
    description: 'This is third card'
},
{
    title: 'Card-3',
    description: 'This is third card'
}
]
export default function CardPage() {
    return   <div className="p-10">
        <h1 className="text-3xl font-bold mb-6">Card Layout</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                cardData.map((card, index) => {
                    return <Card key={index} title={card.title} description={card.description} />
                })
            }
        </div>
    </div>
}