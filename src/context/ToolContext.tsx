'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Tool = 'video' | 'audio' | 'subtitles' | 'file';
type SubTool = 'trim' | 'compress' | 'convert' | null;

interface ToolContextType {
  activeTool: Tool | null;
  selectedSubTool: SubTool;
  setActiveTool: (tool: Tool | null) => void;
  setSelectedSubTool: (subTool: SubTool) => void;
}

const ToolContext = createContext<ToolContextType | undefined>(undefined);

export function ToolProvider({ children }: { children: ReactNode }) {
  const [activeTool, setActiveTool] = useState<Tool | null>(null);
  const [selectedSubTool, setSelectedSubTool] = useState<SubTool>(null);

  return (
    <ToolContext.Provider
      value={{
        activeTool,
        selectedSubTool,
        setActiveTool,
        setSelectedSubTool,
      }}
    >
      {children}
    </ToolContext.Provider>
  );
}

export function useToolContext() {
  const context = useContext(ToolContext);
  if (context === undefined) {
    throw new Error('useToolContext must be used within a ToolProvider');
  }
  return context;
}

