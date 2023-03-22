import TableHead from "@/components/TableHead";
import TableBody from "@/components/TableBody";
export default function Home() {
  const columns = [
    { label: "Col1", key: "col1", width: 100 },
    { label: "Col2", key: "col2", width: 100 },
    { label: "Col3", key: "col3", width: 200 },
    { label: "Col4", key: "col4", width: 150 },
    { label: "Col5", key: "col5", width: 200 },
  ];
  const items = [
    { col1: "hello", col2: "bye", col3: "1", col4: "sdasd", col5: "asdvv" },
    { col1: "hello", col2: "bye", col3: "2", col4: "sdasd", col5: "asdvv" },
    { col1: "hello", col2: "bye", col3: "3", col4: "sdasd", col5: "asdvv" },
    { col1: "hello", col2: "bye", col3: "4", col4: "sdasd", col5: "asdvv" },
    { col1: "hello", col2: "bye", col3: "5", col4: "sdasd", col5: "asdvv" },
    { col1: "hello", col2: "bye", col3: "6", col4: "sdasd", col5: "asdvv" },
    { col1: "hello", col2: "bye", col3: "7", col4: "sdasd", col5: "asdvv" },
    { col1: "hello", col2: "bye", col3: "8", col4: "sdasd", col5: "asdvv" },
    { col1: "hello", col2: "bye", col3: "9", col4: "sdasd", col5: "asdvv" },
    { col1: "hello", col2: "bye", col3: "0", col4: "sdasd", col5: "asdvv" },
  ];
  return (
    <>
      <div>
        <table>
          <TableHead columns={columns} />
          <TableBody columns={columns} items={items} />
        </table>
      </div>
    </>
  );
}
