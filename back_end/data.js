import bcrypt from "bcryptjs";
const data = {
    users: [{
            company_id: "comp01",
            first_name: "Kavin",
            last_name: "P",
            email: "kavin@gmail.com",
            password: bcrypt.hashSync("12345"),
            isAdmin: true,
            role: "Project Manager",
        },
        {
            company_id: "comp02",
            first_name: "Janu",
            last_name: "S",
            email: "janu@gmail.com",
            password: bcrypt.hashSync("12345"),
            isAdmin: false,
            role: "Scrum Master",
        },
    ],
};

export default data;