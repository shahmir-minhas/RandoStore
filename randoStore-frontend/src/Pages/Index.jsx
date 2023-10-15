import ItemCard from "../Components/Common/ItemCard";
import useApiHook from "../Hooks/useApiHok";
import { Skeleton } from "antd";
import { useSearch } from "../Store/store";

const Index = () => {
  const { data, loading } = useApiHook({ method: "get", url: "/items/" });
  const { search } = useSearch();

  return (
    <section>
      <h2 className="text-[21px] font-semibold mb-[10px]">Products</h2>
      <Skeleton loading={loading}>
        <div className="flex gap-3 flex-wrap">
          {data
            ?.filter(
              (item) =>
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.id.toLowerCase().includes(search.toLowerCase()) ||
                item.price.toLowerCase().includes(search.toLowerCase())
            )
            ?.map((item) => (
              <ItemCard data={item} key={item.name} />
            ))}
        </div>
      </Skeleton>
    </section>
  );
};

export default Index;
