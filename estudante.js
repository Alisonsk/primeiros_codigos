class estudante{
    constructor(nome,matricula){
        this.nome=nome;
        this.matricula=matricula;
    }
   }
   let nome=prompt("nome");
   let matricula=prompt("matricula");
   const estudante1=new estudante(nome,matricula);
   alert(estudante1.nome+"\n"+estudante1.matricula);

