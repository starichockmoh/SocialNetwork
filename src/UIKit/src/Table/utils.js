function hasTotalFn(header = []) {
  if (!Array.isArray(header)) return false;
  return header.some((headerColumn) => headerColumn.totalFn != null);
}

export { hasTotalFn };
export default {};
