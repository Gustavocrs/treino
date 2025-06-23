"use client";

import {useState} from "react";
import {Card} from "@/components/ui/card";
import {cronograma, aquecimento, alongamento, treinoDias} from "@/data/treino";
import {ChevronDown} from "lucide-react";

export default function Treino() {
  const [diaSelecionado, setDiaSelecionado] = useState(cronograma[0].treino);
  const [openAccordion, setOpenAccordion] = useState("aquecimento");

  const [modal, setModal] = useState({
    isOpen: false,
    image: null,
    name: null,
    description: null,
  });
  const treinoDoDia = treinoDias.find((t) => t.titulo === diaSelecionado);
  const getNome = (ex) =>
    typeof ex.nome === "object" ? ex.nome.nome : ex.nome;
  const handleAccordionToggle = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };
  const openModalWithImage = (image, name) => {
    if (image) setModal({isOpen: true, image, name, description: null});
  };
  const openModalWithDescription = (description, name) => {
    if (description) setModal({isOpen: true, image: null, name, description});
  };
  const closeModal = () => {
    setModal({isOpen: false, image: null, name: null, description: null});
  };
  const AccordionTrigger = ({title, sectionName, icon}) => (
    <button
      onClick={() => handleAccordionToggle(sectionName)}
      className="w-full relative flex justify-center items-center p-1 text-lg sm:text-xl font-semibold uppercase hover:bg-muted transition-colors rounded-t-lg"
    >
      <div className="flex items-center gap-3">
        {/* <span>{icon}</span> */}
        <span className="text-base w-60">{title}</span>
      </div>
      <ChevronDown
        className={`absolute right-4 top-1/2 -translate-y-1/2 transform transition-transform duration-300 ${
          openAccordion === sectionName ? "rotate-180" : ""
        }`}
      />
    </button>
  );
  const ExerciseItem = ({exercise, nameGetter}) => {
    const name = nameGetter ? nameGetter(exercise) : exercise.nome;
    return (
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 border-b last:border-none">
        <div className="flex items-center sm:w-1/2 mb-2 sm:mb-0">
          <span
            onClick={() => openModalWithImage(exercise.imagem, name)}
            className={
              exercise.imagem
                ? "font-medium cursor-pointer hover:text-primary transition-colors"
                : "font-medium"
            }
          >
            {name}
          </span>
          {exercise.execucao && (
            <button
              onClick={() => openModalWithDescription(exercise.execucao, name)}
              className="ml-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              aria-label="Ver descrição"
            >
              ?
            </button>
          )}
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground sm:w-auto">
          <div className="font-medium">
            <span className="sm:hidden font-semibold">Séries: </span>
            {exercise.series ?? "-"}
          </div>
          <div className="font-medium">
            <span className="sm:hidden font-semibold">Reps: </span>
            {exercise.reps ?? "-"}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8 space-y-8">
      <div className="text-center px-2">
        <h1 className="text-2xl sm:text-3xl mb-4 font-bold uppercase">
          Ficha de Treino
        </h1>
        <div className="mt-1 text-muted-foreground flex flex-col">
          <span>
            <strong>Frequência:</strong> 3x na semana
          </span>
          <span>
            <strong>Foco:</strong> Fortalecimento e Proteção Lombar
          </span>
        </div>
      </div>

      <Card className="p-3">
        <h2 className="text-center text-base font-semibold uppercase">
          Cronograma Semanal
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {cronograma.map((item) => (
            <button
              key={item.dia}
              onClick={() => setDiaSelecionado(item.treino)}
              className={`px-4 py-2 rounded-lg border transition-colors cursor-pointer text-sm sm:text-base ${
                diaSelecionado === item.treino
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-muted"
              }`}
            >
              {item.dia}
            </button>
          ))}
        </div>
      </Card>

      <div className="space-y-4">
        {/* 🔥 Aquecimento */}
        <Card>
          <AccordionTrigger
            title="Aquecimento"
            sectionName="aquecimento"
            icon="🔥"
          />
          {openAccordion === "aquecimento" && (
            <div className="px-4 border-t">
              {aquecimento.map((ex, i) => (
                <ExerciseItem key={i} exercise={ex} />
              ))}
            </div>
          )}
        </Card>

        {/* 🏋️‍♂️ Treino do Dia */}
        {treinoDoDia && (
          <Card>
            <AccordionTrigger
              title={treinoDoDia.titulo}
              sectionName="treino"
              icon="🏋️‍♂️"
            />
            {openAccordion === "treino" && (
              <div className="px-4 border-t">
                {treinoDoDia.exercicios.map((ex, i) => (
                  <ExerciseItem key={i} exercise={ex} nameGetter={getNome} />
                ))}
              </div>
            )}
          </Card>
        )}

        {/* 🧘 Alongamento */}
        <Card>
          <AccordionTrigger
            title="Alongamento"
            sectionName="alongamento"
            icon="🧘"
          />
          {openAccordion === "alongamento" && (
            <div className="px-4 border-t">
              {alongamento.map((item, i) => (
                <ExerciseItem key={i} exercise={item} />
              ))}
            </div>
          )}
        </Card>
      </div>

      {modal.isOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-card rounded-lg shadow-xl max-w-2xl w-full p-6 relative animate-in fade-in-90 zoom-in-95 max-h-[85vh] flex flex-col"
          >
            <h3 className="text-lg font-medium mb-4 pr-8 flex-shrink-0">
              {modal.name}
            </h3>
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 p-1 text-muted-foreground hover:text-foreground"
              aria-label="Fechar modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="mt-2 overflow-y-auto">
              {modal.image && (
                <img
                  src={modal.image}
                  alt={`Ilustração para ${modal.name}`}
                  className="w-full h-auto object-contain rounded-md"
                />
              )}
              {modal.description && (
                <p className="text-foreground/90 leading-relaxed">
                  {modal.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
