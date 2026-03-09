import { GridColDef } from "@mui/x-data-grid";
import "./add.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
// 1. IMPORT THE HOOK
import { useForm } from "react-hook-form";

type Props = {
    slug: string;
    columns: GridColDef[];
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Add = (props: Props) => {
    // 2. ACTIVATE THE FORM TOOLS
    const { register, handleSubmit } = useForm();

    const queryClient = useQueryClient();

    // 3. THE MUTATION (The "Postman")
    const mutation = useMutation({
        mutationFn: (formData: any) => {
            return fetch(`${import.meta.env.VITE_API_URL}/api/${props.slug}s`, {
                method: "post",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [`all${props.slug}s`] });
            props.setOpen(false);
        },
    });

    // 4. THE SUBMIT FUNCTION
    // 'data' contains exactly what you typed: { firstName: "Ashwin", lastName: "...", ... }
    const onSubmit = (data: any) => {
        mutation.mutate(data);
    };

    return (
        <div className="add">
            <div className="modal">
                <span className="close" onClick={() => props.setOpen(false)}>
                    X
                </span>
                <h1>Add new {props.slug}</h1>




            

                {/* 5. WRAP EVERYTHING IN THE FORM TAG */}
                <form onSubmit={handleSubmit(onSubmit)}>
                    {props.columns
                        .filter((item) => item.field !== "id" && item.field !== "img")
                        .map((column) => (
                            <div className="item" key={column.field}>
                                <label>{column.headerName}</label>

                                {/* 6. THE MAGIC CONNECTION */}
                                {/* {...register("firstName")} connects this input to the form data */}
                                // Final check for your Add.tsx inputs
                                <input
                                    type={column.type}
                                    placeholder={column.headerName}
                                    {...register(column.field, { required: "This field is required" })}
                                />
                            </div>
                        ))}
                    <button>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Add;