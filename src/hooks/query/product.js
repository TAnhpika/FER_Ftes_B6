import { useQuery } from "@tanstack/react-query";
import { fetchApiProduct, fetchApiProductById } from "@/service/product";

export const useProductsQuery = (page) => {
    return useQuery({
        queryKey: ["products", page],
        queryFn: () => fetchApiProduct(page),
        keepPreviousData: true, // giữ dữ liệu cũ khi chờ dữ liệu mới về
        staleTime: 30 * 1000,   // dữ liệu đc coi là 'tươi' trong 30s
        gcTime: 5 * 60 * 1000,   // dữ liệu bị xóa khỏi cache sau 5p khi nó trở nên 'cũ' (stale time hết hạn) - hết hạn cache -> gọi lại api
        enabled: page > 0, // chỉ chạy khi page > 0
    });
};

export const useProductById = (id) => {
    return useQuery({
        queryKey: ["product", id],
        queryFn: () => fetchApiProductById(id),
        enabled: !!id,
    });
};

// cache: là 1 cơ chế lưu trữ tạm thời dữ liệu đã đc truy vấn để có thể sử dụng lại mà không cần gọi lại api 
// cache ở BE lưu dữ liệu ở server, còn cache ở FE lưu ở client (trình duyệt) -> save time & bandwidth xún BE