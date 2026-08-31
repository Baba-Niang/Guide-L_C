"use client";
import {
  MemoryDiagram,
  ArrayDiagram,
  PointerDiagram,
  StringDiagram,
  StructDiagram,
  FlowIfDiagram,
  FlowLoopDiagram,
  ProcessDiagram,
  FunctionDiagram,
  MallocDiagram,
  RecursionDiagram,
  PointerFnDiagram,
  DefenseDiagram,
  Operators3Diagram,
  ModulesDiagram,
  Files3Diagram,
  LifecycleDiagram,
  Compare2Diagram,
} from "./visuals";
import type { VisualBlock } from "@/lib/curriculum-types";

export function VisualRouter({ block }: { block: VisualBlock }) {
  const d = block.diagram;
  switch (d.type) {
    case "memory":
      return <MemoryDiagram vars={d.vars} />;
    case "array":
      return <ArrayDiagram name={d.name} values={d.values} highlightIdx={d.highlightIdx} />;
    case "pointer":
      return <PointerDiagram varName={d.varName} ptrName={d.ptrName} value={d.value} addr={d.addr} />;
    case "string":
      return <StringDiagram text={d.text} />;
    case "struct":
      return <StructDiagram name={d.name} fields={d.fields} />;
    case "flowIf":
      return <FlowIfDiagram />;
    case "flowLoop":
      return <FlowLoopDiagram />;
    case "process":
      return <ProcessDiagram steps={d.steps} title={d.title} />;
    case "function":
      return <FunctionDiagram name={d.name} params={d.params} ret={d.ret} />;
    case "malloc":
      return <MallocDiagram />;
    case "recursion":
      return <RecursionDiagram calls={d.calls} />;
    case "pointerFn":
      return <PointerFnDiagram sig={d.sig} target={d.target} />;
    case "defense":
      return <DefenseDiagram levels={d.levels} />;
    case "operators3":
      return <Operators3Diagram groups={d.groups} />;
    case "modules":
      return <ModulesDiagram files={d.files} />;
    case "files3":
      return <Files3Diagram steps={d.steps} />;
    case "lifecycle":
      return <LifecycleDiagram stages={d.stages} />;
    case "compare2":
      return <Compare2Diagram a={d.a} b={d.b} />;
    default:
      return null;
  }
}
