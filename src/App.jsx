import { useEffect, useState } from "react";
import axios from "axios";
import BarChart from "./Chart";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://www.terriblytinytales.com/test.txt"
        );
        let output = {};
        let strArr = data.split(" ");

        for (var i = 0; i < strArr.length; i++) {
          var word = strArr[i];
          if (output[word] === undefined) {
            output[word] = 1;
          } else {
            output[word] += 1;
          }
        }

        let filterData = Object.keys(output).map((word) => {
          return { key: word, freq: output[word] };
        });

        filterData.sort((a, b) => parseFloat(b.freq) - parseFloat(a.freq));
        console.log(filterData.slice(0, 20));
        setData(filterData.slice(0, 20));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <BarChart data={data} />
    </div>
  );
}

export default App;
