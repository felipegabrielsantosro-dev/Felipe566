class Validate {
    static form;
    static Setform(id) {
        this.form = document.getElementById(id);
        if (!this.form) {
            throw new Error("Fórmulario Não Encontrado");
        }

        return this;

    }
       static Validate() {
        //Selecione todos os campos, input do form
        const inputs = this.form.queryselectAll('input, textarea, select');
        //percorre todos os campos do form
        inputs.forEach(input=>{
            input.classlist.remove('is-invalid');
            input.classlist.add('is-valid');
            if (!input.checkValidty()) {
                input.classlist.remove('is-valid');
                input.classlist.add('is-invalid');
            }
        });
       }
}
export {Validate};