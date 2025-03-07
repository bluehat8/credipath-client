import { TransactionData, CategoryData, PendingPayments } from '../components/reports/ControlBalance/type';

export const transactions: TransactionData[] = [
  {
    type: "Prestamo",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/8511c76d5aeb871fc4bf9ac00ab59c3ce434e21895c44439b405cd2c31617010?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    loanCode: "RNORTE-01",
    client: "Ricardo Morales",
    loanAmount: "500 $",
    operation: {
      amount: "100.00 $",
      type: "credit"
    },
    date: "2023-01-03"
  },
  {
    type: "Prestamo",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/8511c76d5aeb871fc4bf9ac00ab59c3ce434e21895c44439b405cd2c31617010?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", 
    loanCode: "RNORTE-02",
    client: "Junietza R.",
    loanAmount: "500$",
    operation: {
      amount: "500 $",
      type: "credit"
    },
    date: "2023-01-03"
  },
  {
    type: "Pago N° 5",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/e5eb8bd96019ceef61ced9625d2a24fa1e79a2ebee6d73d37fbf06d622af0eb2?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    loanCode: "RNORTE-04",
    client: "Joshua R.",
    loanAmount: "600$",
    operation: {
      amount: "100$",
      type: "debit"
    },
    date: "2023-01-03"
  },
  {
    type: "Pago N 6",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/1b43ccc6587875fb7675a890ef13d67f671ffdc07bc22991aabb11ce571adbb6?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    loanCode: "RNORTE-05",
    client: "Osneiling",
    loanAmount: "700",
    operation: {
      amount: "-0.24%",
      type: "credit"
    },
    date: "2023-01-03"
  },
  {
    type: "Prestamo",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/8511c76d5aeb871fc4bf9ac00ab59c3ce434e21895c44439b405cd2c31617010?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    loanCode: "RNORTE-01",
    client: "Ricardo Morales",
    loanAmount: "500 $",
    operation: {
      amount: "100.00 $",
      type: "credit"
    },
    date: "2023-01-03"
  },
  {
    type: "Prestamo",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/8511c76d5aeb871fc4bf9ac00ab59c3ce434e21895c44439b405cd2c31617010?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", 
    loanCode: "RNORTE-02",
    client: "Junietza R.",
    loanAmount: "500$",
    operation: {
      amount: "500 $",
      type: "credit"
    },
    date: "2023-01-03"
  },
  {
    type: "Pago N° 5",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/e5eb8bd96019ceef61ced9625d2a24fa1e79a2ebee6d73d37fbf06d622af0eb2?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    loanCode: "RNORTE-04",
    client: "Joshua R.",
    loanAmount: "600$",
    operation: {
      amount: "100$",
      type: "debit"
    },
    date: "2023-01-03"
  },
  {
    type: "Pago N 6",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/1b43ccc6587875fb7675a890ef13d67f671ffdc07bc22991aabb11ce571adbb6?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    loanCode: "RNORTE-05",
    client: "Osneiling",
    loanAmount: "700",
    operation: {
      amount: "-0.24%",
      type: "credit"
    },
    date: "2023-01-03"
  },{
    type: "Prestamo",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/8511c76d5aeb871fc4bf9ac00ab59c3ce434e21895c44439b405cd2c31617010?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    loanCode: "RNORTE-01",
    client: "Ricardo Morales",
    loanAmount: "500 $",
    operation: {
      amount: "100.00 $",
      type: "credit"
    },
    date: "2023-01-03"
  },
  {
    type: "Prestamo",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/8511c76d5aeb871fc4bf9ac00ab59c3ce434e21895c44439b405cd2c31617010?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&", 
    loanCode: "RNORTE-02",
    client: "Junietza R.",
    loanAmount: "500$",
    operation: {
      amount: "500 $",
      type: "credit"
    },
    date: "2023-01-03"
  },
  {
    type: "Pago N° 5",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/e5eb8bd96019ceef61ced9625d2a24fa1e79a2ebee6d73d37fbf06d622af0eb2?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    loanCode: "RNORTE-04",
    client: "Joshua R.",
    loanAmount: "600$",
    operation: {
      amount: "100$",
      type: "debit"
    },
    date: "2023-01-03"
  },
  {
    type: "Pago N 6",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/1b43ccc6587875fb7675a890ef13d67f671ffdc07bc22991aabb11ce571adbb6?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    loanCode: "RNORTE-05",
    client: "Osneiling",
    loanAmount: "700",
    operation: {
      amount: "-0.24%",
      type: "credit"
    },
    date: "2023-01-03"
  }
];

export const categories: CategoryData[] = [
  {
    label: "Pagos",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/f4e3c4e6ffaae64e8220a751cbdf4b2518c50073fab5e22cf90d43ff7a3bcb51?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    hasDropdown: true
  },
  {
    label: "Prestamos"
  },
  {
    label: "Pagos",
    icon: "https://cdn.builder.io/api/v1/image/assets/f28c1fec9bca4815bc4fb444cc5ef2a5/3a07252b2c9b8ef06d76a1bd4ad9bb1a7d8573ee65e3c1d016f4e6017c9a3cba?apiKey=f28c1fec9bca4815bc4fb444cc5ef2a5&",
    hasDropdown: true
  }
];

export const pendingPayments : PendingPayments[] = [
  {
    id: "001",
    collaborator: "Juan Pérez",
    client: "Ricardo Morales",
    amount: 100,
    installmentNumber: "5/10",
    dueDate: "2025-03-06",
    status: "pending",
  },
  {
    id: "002",
    collaborator: "Juan Pérez",
    client: "María Gómez",
    amount: 150,
    installmentNumber: "3/6",
    dueDate: "2025-03-06",
    status: "pending",
  },
  {
    id: "003",
    collaborator: "Ana López",
    client: "Carlos Rivas",
    amount: 200,
    installmentNumber: "7/12",
    dueDate: "2025-03-06",
    status: "pending",
  },
  {
    id: "004",
    collaborator: "Ana López",
    client: "Sofía Méndez",
    amount: 120,
    installmentNumber: "2/5",
    dueDate: "2025-03-05",
    status: "pending",
  },
  {
    id: "005",
    collaborator: "Luis Rodríguez",
    client: "Javier Castro",
    amount: 80,
    installmentNumber: "4/8",
    dueDate: "2025-03-02",
    status: "overdue",
  },
  {
    id: "006",
    collaborator: "Luis Rodríguez",
    client: "Fernando Torres",
    amount: 90,
    installmentNumber: "6/10",
    dueDate: "2025-03-05",
    status: "pending",
  },
  {
    id: "007",
    collaborator: "Pedro Sánchez",
    client: "Gabriela Fernández",
    amount: 130,
    installmentNumber: "5/9",
    dueDate: "2025-03-05",
    status: "pending",
  },
  {
    id: "008",
    collaborator: "Pedro Sánchez",
    client: "Lucas Martínez",
    amount: 110,
    installmentNumber: "3/7",
    dueDate: "2025-03-05",
    status: "overdue",
  },
  {
    id: "009",
    collaborator: "Claudia Morales",
    client: "Isabel Reyes",
    amount: 140,
    installmentNumber: "8/12",
    dueDate: "2025-03-05",
    status: "pending",
  },
  {
    id: "010",
    collaborator: "Claudia Morales",
    client: "Diego Vargas",
    amount: 95,
    installmentNumber: "2/5",
    dueDate: "2025-03-05",
    status: "pending",
  }
];
