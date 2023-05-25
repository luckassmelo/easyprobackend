import {ZebraType} from '../types/zebra-printing.type'
export function zplFormatHelper(fields: ZebraType, index:number): string{    
    const zpl = `^XA~TA000~JSN^LT0^MNW^MTT^PON^PMN^LH0,0^JMA^PR2,2~SD15^JUS^LRN^CI0^XZ^XA^MMT^PW1119^LL0224^LS0^FT9,247^BQN,2,10^FH\^FDLA,${fields.batchSchott}-${index}^FS^FT447,106^A0N,68,64^FH\^FD ${fields.inkCode}^FS^FT372,191^A0N,68,67^FH\^FD${fields.batchSchott}^FS^FT846,97^A0N,39,38^FH\^FDNUM: ${index}^FS^FT693,184^A0N,39,38^FH\^FDCOR: ${fields.colorInk}^FS^FT245,94^A0N,50,40^FH\^FDCOD TINTA:^FS^FT245,181^A0N,50,50^FH\^FDLote:^FS^PQ1,0,1,Y^XZ`
    return zpl;
}

