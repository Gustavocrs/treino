export const cronograma = [
  {dia: "Dia 1", treino: "Core + Superiores (Empurrar)"},
  {dia: "Dia 2", treino: "Core + Inferiores"},
  {dia: "Dia 3", treino: "Core + Superiores (Puxar)"},
];

export const alongamento = [
  "Alongamento de Glúteo deitado",
  "Alongamento de Flexores do Quadril",
  "Alongamento de Peitoral na Parede",
  "Alongamento de Dorsal",
];

export const aquecimento = [
  {nome: "Mobilidade de Ombros", series: "2", reps: "12"},
  {nome: "Mobilidade Torácica (Gato-Vaca)", series: "2", reps: "12"},
  {
    nome: "Mobilidade de Quadril (Fire Hydrant)",
    series: "2",
    reps: "10 por lado",
  },
  {
    nome: "Marcha no Lugar (Elevação de Joelhos)",
    series: "2",
    reps: "30 seg",
  },
];

export const treinoDias = [
  {
    titulo: "Core + Superiores (Empurrar)",
    exercicios: [
      {nome: "Dead Bug", series: "3", reps: "10-12"},
      {nome: "Bird Dog", series: "3", reps: "10 por lado"},
      {nome: "Incline Push-Up (Flexão Inclinada)", series: "3", reps: "8-12"},
      {nome: "Wall Push-Up (Flexão na Parede)", series: "2", reps: "12-15"},
      {nome: "Incline Pike Push-Up (Foco Ombros)", series: "3", reps: "6-10"},
    ],
  },
  {
    titulo: "Core + Inferiores",
    exercicios: [
      {nome: "Dead Bug", series: "3", reps: "10-12"},
      {nome: "Bird Dog", series: "3", reps: "10 por lado"},
      {
        nome: "Wall Sit (Isometria na Parede)",
        series: "3",
        reps: "30-45 seg",
      },
      {nome: "Glute Bridge (Ponte de Glúteo)", series: "3", reps: "12-15"},
      {
        nome: "Assisted Squat (Agachamento Assistido)",
        series: "3",
        reps: "8-12",
      },
    ],
  },
  {
    titulo: "Core + Superiores (Puxar)",
    exercicios: [
      {nome: "Dead Bug", series: "3", reps: "10-12"},
      {nome: "Bird Dog", series: "3", reps: "10 por lado"},
      {
        nome: "Australian Row (Remada Invertida Baixa)",
        series: "3",
        reps: "6-10",
      },
      {nome: "Banded Row (Remada com Elástico)", series: "3", reps: "10-12"},
      {nome: "Face Pull com Elástico", series: "3", reps: "12-15"},
    ],
  },
];
