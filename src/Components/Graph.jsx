import { VictoryContainer, VictoryPie } from 'victory'

export default function Graph({ className, labelFontSize = 25, per }) {
  const visit = per * 100
  const notvisit = (1 - per) * 100

  return (
    <div className={className}>
      <VictoryPie
        containerComponent={<VictoryContainer responsive={true} />}
        data={[
          { x: visit + '%', y: visit },
          { x: notvisit + '%', y: notvisit },
        ]}
        width={300}
        height={300}
        colorScale={['darkturquoise', 'tomato']}
        labelRadius={() => 70}
        style={{
          data: {
            fillOpacity: 0.9,
            stroke: '#333',
            strokeWidth: 3,
          },
          labels: {
            fontSize: labelFontSize,
          },
        }}
      ></VictoryPie>
      <div>
        <div className="graph_sub darkturquoise">
          - Количество посещенных занятий в процентах
        </div>
        <div className="graph_sub tomato ">
          - Количество НЕ посещенных занятий в процентах
        </div>
      </div>
    </div>
  )
}
