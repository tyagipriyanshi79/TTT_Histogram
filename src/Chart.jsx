import { Bar } from "react-chartjs-2";

function LineChart({ data }) {
  return (
    <div className="flex-center">
      <Bar
        data={{
          labels: data.map((curr) => curr.key),
          datasets: [
            {
              label: "word frequency count",
              data: data.map((curr) => curr.freq),
              borderWidth: 1,
            },
          ],
        }}
      />
    </div>
  );
}

export default LineChart;
