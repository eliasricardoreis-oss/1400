export const REQUIRED_KEYS = [
  "fw_status",
  "wk_expm1_builtin",
  "wk_JSFunction_m_function",
  "wk_POP_RDI_RET",
  "wk_POP_RSI_RET",
  "wk_POP_RDX_RET",
  "wk_POP_RCX_RET",
  "wk_POP_RAX_RET",
  "wk_POP_R8_RET",
  "wk_POP_R9_RET",
  "wk_LEAVE_RET",
  "wk_MOV_QWORD_PTR_RDI_RAX_RET",
  "wk_MOV_RDI_RSI_30_CALL",
  "wk_POP_RAX_MOV_RAX_JMP_18",
  "wk_PUSH_RBP_MOV_RBP_RSP_10",
  "wk_MOV_RDI_RAX_8_CALL_20",
  "wk_MOV_RDX_RAX_18_CALL_10",
  "wk_PUSH_RDX_POP_RSP_RET",
  "pivot_view_sp",
  "wk_ArrayBuffer_m_impl",
  "wk_ArrayBuffer_m_contents_m_data",
  "wk___imp___error",
  "k__error",
  "k_scan_stage1",
  "k_scan_stage2",
  "k_evf_cv",
  "k_sysent_661",
  "k_jmp_rsi",
];

export const OPTIONAL_KEYS = [
  "k_stubs",
  "wk___imp_pthread_create",
  "k_pthread_create",
  "kpatch",
  "payload",
  "alias_of",
  "k_idt_rsvd",
];

export const PS4 = {
  "13.52": {
    fw_status:
      "state=663-LIVE-on-hardware shares=13.50 (webkit+libkernel) " +
      "kernel_rvas=MEASURED-from-kernel_1352.elf (kdump5 tier1 36MB pass=39/0, " +
      "kderive 16/16 recipes) kpatch=1352.bin-24-sites-verified-OFFLINE-ONLY " +
      "payload=payload2.bin-PS4HEN-native-1352 (patched-GoldHEN KP'd 2/2) " +
      "bug=663",

    wk_expm1_builtin: 0x2586880,
    wk_JSFunction_m_function: 0x28,

    wk_POP_RDI_RET: 0x5c480,
    wk_POP_RSI_RET: 0x6e45e,
    wk_POP_RDX_RET: 0x12c5ba,
    wk_POP_RCX_RET: 0x1bade,
    wk_POP_RAX_RET: 0x10504,
    wk_POP_R8_RET: 0x9b311,
    wk_POP_R9_RET: 0x1dcfb1,
    wk_LEAVE_RET: 0x182f7,
    wk_MOV_QWORD_PTR_RDI_RAX_RET: 0x548b,
    wk_PUSH_RDX_POP_RSP_RET: 0x2abccaa,
    wk_MOV_RDI_RSI_30_CALL: 0x295f948,
    wk_POP_RAX_MOV_RAX_JMP_18: 0x1d989e3,
    wk_PUSH_RBP_MOV_RBP_RSP_10: 0x25bae0,
    wk_MOV_RDI_RAX_8_CALL_20: 0x4a0406,
    wk_MOV_RDX_RAX_18_CALL_10: 0x1ec3ada,

    pivot_view_sp: 0x38,
    wk_ArrayBuffer_m_impl: 0x10,
    wk_ArrayBuffer_m_contents_m_data: 0x10,

    wk___imp___error: 0x3cb8cc8,
    k__error: 0x1a0f0,
    wk___imp_pthread_create: 0x3cb9c00,
    k_pthread_create: 0x21790,

    k_stubs: {
      3: 0x2c170, 4: 0x2b8d0, 5: 0x2b970, 6: 0x2d620, 20: 0x2cb70, 23: 0x2b6f0,
      24: 0x2d5e0, 25: 0x2b4d0, 30: 0x2c9d0, 54: 0x2cff0, 92: 0x2b650, 97: 0x2d050,
      98: 0x2b5f0, 104: 0x2d380, 105: 0x2b490, 106: 0x2d480, 118: 0x2b2f0, 135: 0x2c280,
      240: 0x2d4c0, 331: 0x2c6b0, 432: 0x2b510, 466: 0x2cc70, 487: 0x2ba80, 488: 0x2bd10,
      538: 0x2b430, 539: 0x2b4f0, 544: 0x2beb0, 545: 0x2ca30, 632: 0x2d090, 633: 0x2d840,
      662: 0x2ccb0, 663: 0x2c3e0, 664: 0x2d740, 666: 0x2d540, 669: 0x2bdf0,
    },
    k_scan_stage1: 0x40000,
    k_scan_stage2: 0x60000,

    k_idt_rsvd: 0x1c1e00,
    k_sysctl_handle_int: 0x3fa8e0,
    k_jmp_rsi: 0x4d6d0,
    k_kl_lock: 0xe6c60,
    k_evf_cv: 0x785228,
    k_sysent: 0x1102b70,
    k_sysent_661: 0x110a760,
    k_oid_kern_file: 0x1a2f8a0,
    k_oid_maxfilesperproc: 0x1a2f950,
    k_oid_maxprocperuid: 0x1a3ba88,
    k_oid_maxfiles: 0x1a2f9a8,
    k_arg1_maxfilesperproc: 0x22cc47c,
    k_arg1_maxprocperuid: 0x22cc478,
    k_arg1_maxfiles: 0x22cc474,
    k_prison0: 0x1a5c0c0,
    k_rootvnode: 0x2136e90,

    kpatch: "1352.bin",
    payload: "goldhen.bin",
    payload_hen: "includes/payloads/HEN/payload2.bin",
  },

  // Firmware 14.00 Completo e Otimizado
"14.00": {
    fw_status: "state=14.00-full-kernel-offsets-integrated",

    // --- Seus Gadgets e Endereços Adicionais (Mapeados) ---
    wk_RET: 0x004032,
    wk_LEAVE_RET: 0x01c2f7,
    wk_POP_RAX_RET: 0x014504,
    wk_POP_RBX_RET: 0x00b9e8,
    wk_POP_RCX_RET: 0x01fade,
    wk_POP_RDI_RET: 0x060480,
    wk_POP_RDX_RET: 0x1305ba,
    wk_POP_RSI_RET: 0x07245e,
    wk_POP_RBP_RET: 0x0040b6,
    wk_POP_RSP_RET: 0x073017,
    wk_POP_R8_RET: 0x230cbe1,
    wk_POP_R9_RET: 0x9df883,
    wk_POP_R10_RET: 0x2dc33b5,
    wk_POP_R11_RET: 0x19c9ba,
    wk_POP_R12_RET: 0x242ab15,
    wk_POP_R13_R14_R15_RET: 0x06047b,
    wk_POP_R14_RET: 0x0a9e91,
    wk_POP_R15_RET: 0x06047f,
    wk_JMP_RSI: 0x0cda83,

    // --- Demais Offsets do WebKit e Kernel ---
    wk_expm1_builtin: 0x2586880,
    wk_JSFunction_m_function: 0x28,
    wk_MOV_QWORD_PTR_RDI_RAX_RET: 0x4032c,

    wk_MOV_RDI_RSI_30_CALL: 0x295f948,
    wk_POP_RAX_MOV_RAX_JMP_18: 0x1d989e3,
    wk_PUSH_RBP_MOV_RBP_RSP_10: 0x25bae0,
    wk_MOV_RDI_RAX_8_CALL_20: 0x4a0406,
    wk_MOV_RDX_RAX_18_CALL_10: 0x1ec3ada,
    wk_PUSH_RDX_POP_RSP_RET: 0x2abccaa,

    pivot_view_sp: 0x38,
    wk_ArrayBuffer_m_impl: 0x10,
    wk_ArrayBuffer_m_contents_m_data: 0x10,

    wk___imp___error: 0x3cb8cc8,
    k__error: 0x1a0f0,
    wk___imp_pthread_create: 0x3cb9c00,
    k_pthread_create: 0x21790,

    k_scan_stage1: 0x40000,
    k_scan_stage2: 0x60000,

    k_idt_rsvd: 0x1c1d60,
    k_prison0: 0x0111FA18,
    k_rootvnode: 0x02136E90,
    k_sysent: 0x01102B70,
    k_sysent_661: 0x110a760,
    k_jmp_rsi: 0x47b31,
    k_kl_lock: 0xe6c60,
    k_evf_cv: 0x785228,
    k_allproc: 0x01B28538,
    k_m_temp: 0x01520D00,
    k_xfast_syscall: 0x000001C0,

    k_memcpy: 0x002BD850,
    k_memcmp: 0x00394D80,
    k_memset: 0x001FA500,
    k_malloc: 0x00009520,
    k_free: 0x000096E0,
    k_proc_rwmem: 0x00366A10,

    k_oid_kern_file: 0x1a2f8a0,
    k_oid_maxfilesperproc: 0x1a2f950,
    k_oid_maxprocperuid: 0x1a3ba88,
    k_oid_maxfiles: 0x1a2f9a8,
    k_arg1_maxfilesperproc: 0x22cc47c,
    k_arg1_maxprocperuid: 0x22cc478,
    k_arg1_maxfiles: 0x22cc474,
    
    // Arquivos de Patch e Payload
    kpatch: "1400.bin",
    payload: "hen.bin",
  },
};


export function offsetsFor(uaString) {
  const m = (uaString || "").match(/PlayStation\s+4[\/ ](\d+)\.(\d+)/);
  if (!m) return { key: null, off: null };

  const key = m[1] + "." + parseInt(m[2], 16).toString(16).padStart(2, "0");
  return { key, off: PS4[key] || null };
}

export function validateOffsets(off, fwKey) {
  if (typeof off === "string" && !fwKey) {
    fwKey = off;
    off = PS4[fwKey];
  }
  const errors = [];
  if (!off) {
    return { ok: false, errors: ["Tabela de offsets inexistente para o firmware" + (fwKey ? ` (${fwKey})` : "")] };
  }

  for (const k of REQUIRED_KEYS) {
    if (off[k] === undefined || off[k] === null) {
      errors.push(`Chave obrigatória ausente: ${k}`);
    }
  }

  if (fwKey?.match(/^(13|14)\./)) {
    const NEED_K = [
      "k_idt_rsvd",
      "k_oid_kern_file",
      "k_oid_maxfilesperproc",
      "k_oid_maxprocperuid",
      "k_oid_maxfiles",
      "k_arg1_maxfilesperproc",
      "k_arg1_maxprocperuid",
      "k_arg1_maxfiles",
      "k_prison0",
      "k_rootvnode",
    ];
    for (const k of NEED_K) {
      if (off[k] === undefined || off[k] === null) {
        errors.push(`Chave crítica de kernel ausente para 13.x/14.x: ${k}`);
      }
    }
  }

  const K_ALIGN_8 = [
    "k_prison0",
    "k_rootvnode",
    "k_sysent",
    "k_sysent_661",
    "k_oid_kern_file",
    "k_oid_maxfilesperproc",
    "k_oid_maxprocperuid",
    "k_oid_maxfiles",
  ];
  for (const k of K_ALIGN_8) {
    if (typeof off[k] === "number" && (off[k] % 8 !== 0)) {
      errors.push(`Desalinhamento detectado: ${k} (0x${off[k].toString(16)}) não é múltiplo de 8 bytes`);
    }
  }

  return { ok: errors.length === 0, errors };
}
