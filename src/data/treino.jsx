export const cronograma = [
  {dia: "Dia 1", treino: "Core e membros superiores"},
  {dia: "Dia 2", treino: "Fortalecimento membros inferiores"},
  {dia: "Dia 3", treino: "Core e mobilidade"},
];
export const aquecimento = [
  {nome: "Marcha no lugar", series: 1, reps: "60 segundos"},
  {nome: "Elevação de joelhos (sem salto)", series: 1, reps: 20},
  {nome: "Rotação de ombros", series: 1, reps: 15},
];
export const alongamento = [
  {nome: "Alongamento do piriforme sentado", series: 2, reps: "30 segundos"},
  {nome: "Flexão suave do pescoço para lado", series: 2, reps: "20 segundos"},
  {
    nome: "Alongamento de isquiotibiais deitado",
    series: 2,
    reps: "30 segundos",
  },
  {
    nome: "Alongamento de quadríceps em pé (segurando apoio)",
    series: 2,
    reps: "30 segundos",
  },
  {nome: "Alongamento de flexores do quadril", series: 2, reps: "30 segundos"},
  // Removido alongamentos que exigem flexão intensa lombar ou torção forçada
];
export const treinoDias = [
  {
    titulo: "Core e membros superiores",
    exercicios: [
      {nome: "Dead Bug", series: 3, reps: 10},
      {nome: "Bird Dog", series: 3, reps: 12},
      {
        nome: "Prancha isométrica (com joelhos apoiados, se necessário)",
        series: 3,
        reps: "30s",
      },
      {nome: "Supino com halteres no banco", series: 3, reps: 12},
      {nome: "Remada unilateral com halteres", series: 3, reps: 12},
      {nome: "Elevação lateral de ombros com halteres", series: 3, reps: 15},
    ],
  },
  {
    titulo: "Fortalecimento membros inferiores",
    exercicios: [
      {
        nome: "Wall Sit (sentar encostado na parede, isometria)",
        series: 3,
        reps: "30s",
      },
      {nome: "Glúteo ponte (hip thrust) no chão", series: 3, reps: 15},
      {
        nome: "Agachamento com peso corporal (parcial, sem flexão profunda)",
        series: 3,
        reps: 12,
      },
      {
        nome: "Elevação de panturrilha em pé (segurando apoio)",
        series: 3,
        reps: 20,
      },
      {nome: "Abdução de quadril deitado lateralmente", series: 3, reps: 15},
    ],
  },
  {
    titulo: "Core e mobilidade",
    exercicios: [
      {nome: "Prancha lateral com joelhos apoiados", series: 3, reps: "20-30s"},
      {nome: "Dead Bug", series: 3, reps: 10},
      {nome: "Bird Dog", series: 3, reps: 12},
      {
        nome: "Superman isométrico leve (sem hiperextensão)",
        series: 3,
        reps: "20s",
      },
      {
        nome: "Alongamento ativo de gato-vaca (mobilidade lombar suave)",
        series: 3,
        reps: 10,
      },
    ],
  },
];
