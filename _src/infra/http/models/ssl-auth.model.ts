type AgentOptions = {
  rejectUnauthorized: boolean;
}

export class SSLAuth {
  rejectUnauthorized: boolean;


  constructor(rejectUnauthorized: boolean,) {
    this.rejectUnauthorized = rejectUnauthorized;
  }

  toAgentOptions(): AgentOptions {
    return {
      rejectUnauthorized: this.rejectUnauthorized,
    }
  }
}
