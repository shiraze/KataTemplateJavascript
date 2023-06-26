export function escapeDNPartQuoted(inString) {
    const escapeIt = inString.search(/[,=+<>\\#;"]/g);
    if (escapeIt < 0) return inString;
  
    const escaped = inString
    //   .replace(/\\/g, "\\\\")
    //   .replace(/\"/g, '\\"')
      .replace(/\\/g, "_SLASH_IN_OID_")
      .replace(/\"/g, "_QUOTE_IN_OID_")
      .replace(/\\/g, "")
      .replace(/_SLASH_IN_OID_/g, "\\\\")
      .replace(/_QUOTE_IN_OID_/g, '\\"');
  
    return `"${escaped}"`;
  }
