import { AbstractControl } from "@angular/forms";

export function senhaFacilDeducaoValidator(valor: AbstractControl){
    //Retorna o objeto com senhaFacilDeducao = true caso a senha seja uma sequência numérica progressiva ou regressiva,
    //De qualquer tamanho
    //Retorna null se não for sequência numérica.
    
    const valorString = valor.value as string;
    let i: number;
    let passouProgressivo: boolean = false;
    let passouRegressivo: boolean = false;
    
    for(let char1 of valorString){
        if(char1 != '0' && 
           char1 != '1' && 
           char1 != '2' && 
           char1 != '3' && 
           char1 != '4' && 
           char1 != '5' && 
           char1 != '6' && 
           char1 != '7' && 
           char1 != '8' && 
           char1 != '9'){
            return null;
        }
    }
    
    //Testa se é uma sequência progressiva
    for(i = 0; i < valorString.length; i++){
        if(i >= 1){
            const valorNumber: number = Number(valorString.charAt(i));
            const valorNumberAnterior: number = Number(valorString.charAt(i - 1));
            
            if(valorNumber != valorNumberAnterior + 1){
                passouProgressivo = true;
            }
        }
    }
    
    //Testa se é uma sequência regressiva
    if(passouProgressivo){
        for(i = 0; i < valorString.length; i++){
            if(i >= 1){
                const valorNumber: number = Number(valorString.charAt(i));
                const valorNumberAnterior: number = Number(valorString.charAt(i - 1));

                if(valorNumber != valorNumberAnterior - 1){
                    passouRegressivo = true;
                }
            }
        }
    }
    
    if(passouProgressivo && passouRegressivo){
        return null; 
    }else{
        return { senhaFacilDeducao: true };
    }
}
