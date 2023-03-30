import { useState, useCallback } from "react";
// import { Z_FIXED } from "zlib";

export function useToggle(initial) {
  const [open, setOpen] = useState();
  return [open, useCallback(() => setOpen((status) => !status, []))];
}
