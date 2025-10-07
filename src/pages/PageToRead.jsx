import useDataLoad from '../Hooks/useDataLoad';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { getReadStoredData } from '../utility/storageManage';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = props => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PageToRead() {
  const readStoredData = getReadStoredData();
  const { books } = useDataLoad();

  const storedReadBooks = books.filter(book =>
    readStoredData.includes(book.bookId)
  );

  return (
    <div className="w-full flex justify-center items-center p-[100px] bg-gray-100 rounded-2xl">
      {storedReadBooks.length > 0 ? (
        <div className="w-full h-[756px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={storedReadBooks}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bookName" className="text-lg font-medium" />
              <YAxis />
              <Bar
                dataKey="totalPages"
                fill="#8884d8"
                shape={<TriangleBar />}
                label={{ position: 'top' }}
              >
                {storedReadBooks.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      ) : (
        <p className="text-[#13131399] text-lg font-medium">No Books readed</p>
      )}
    </div>
  );
}
