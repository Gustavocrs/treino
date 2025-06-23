"use client";

import {useState} from "react";
import {Card} from "@/components/ui/card";
import {cronograma, aquecimento, alongamento, treinoDias} from "@/data/treino";

export default function Treino() {
  const [diaSelecionado, setDiaSelecionado] = useState(cronograma[0].treino);
  const treinoDoDia = treinoDias.find((t) => t.titulo === diaSelecionado);

  const getNome = (ex) =>
    typeof ex.nome === "object" ? ex.nome.nome : ex.nome;
  const getVideo = (ex) =>
    typeof ex.nome === "object" && ex.nome.video ? ex.nome.video : null;
  const getImagem = (ex) =>
    typeof ex.nome === "object" && ex.nome.imagem ? ex.nome.imagem : null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold text-center uppercase">
        Ficha de Treino
      </h1>
      <p className="text-center text-muted-foreground">
        Frequência: <strong>3x na semana</strong> • Foco: Fortalecimento,
        Proteção Lombar
      </p>

      {/* 🔵 Cronograma */}
      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-4 uppercase">
          Cronograma Semanal
        </h2>
        <div className="flex flex-wrap gap-4">
          {cronograma.map((item) => (
            <button
              key={item.dia}
              onClick={() => setDiaSelecionado(item.treino)}
              className={`px-4 py-2 rounded-lg border transition cursor-pointer ${
                diaSelecionado === item.treino
                  ? "bg-blue-600 text-white"
                  : "bg-white hover:bg-blue-100"
              }`}
            >
              {item.dia}
            </button>
          ))}
        </div>
      </Card>

      {/* 🔥 Aquecimento */}
      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-4 uppercase">Aquecimento</h2>
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead className="bg-muted">
              <tr>
                <th className="border p-2">Exercício</th>
                <th className="border p-2">Séries</th>
                <th className="border p-2">Repetições</th>
              </tr>
            </thead>
            <tbody>
              {aquecimento.map((ex, i) => (
                <tr key={i}>
                  <td className="border p-2">{ex.nome}</td>
                  <td className="border p-2">{ex.series}</td>
                  <td className="border p-2">{ex.reps}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* 🏋️‍♂️ Treino do Dia */}
      {treinoDoDia && (
        <Card className="p-4">
          <h2 className="text-xl font-semibold mb-4 uppercase">
            {treinoDoDia.titulo}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border">
              <thead className="bg-muted">
                <tr>
                  <th className="border p-2">Exercício</th>
                  <th className="border p-2">Séries</th>
                  <th className="border p-2">Repetições</th>
                </tr>
              </thead>
              <tbody>
                {treinoDoDia.exercicios.map((ex, i) => (
                  <tr key={i} className="align-top">
                    <td className="border p-2">{getNome(ex)}</td>
                    <td className="border p-2">{ex.series}</td>
                    <td className="border p-2">{ex.reps}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* 🧘 Alongamento */}
      <Card className="p-4">
        <h2 className="text-xl font-semibold mb-4 uppercase">Alongamento</h2>
        <div className="overflow-x-auto">
          <table className="w-full border">
            <thead className="bg-muted">
              <tr>
                <th className="border p-2">Exercício</th>
                <th className="border p-2">Séries</th>
                <th className="border p-2">Repetições</th>
              </tr>
            </thead>
            <tbody>
              {alongamento.map((item, i) => {
                if (typeof item === "string") {
                  return (
                    <tr key={i}>
                      <td className="border p-2" colSpan={3}>
                        {item}
                      </td>
                    </tr>
                  );
                }
                return (
                  <tr key={i}>
                    <td className="border p-2">{item.nome}</td>
                    <td className="border p-2">{item.series ?? "-"}</td>
                    <td className="border p-2">{item.reps ?? "-"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
