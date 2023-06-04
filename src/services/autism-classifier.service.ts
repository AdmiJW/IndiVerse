
import * as tf from '@tensorflow/tfjs';



class AutismClassifierService {

    private static MODEL_URL : string = '/model.json';

    private model? : tf.LayersModel;


    // Returns a boolean, true if the model predicts the data is autistic, false otherwise
    async predict(data: any) {
        if (!this.model) await this.loadModel();
        const input = tf.tensor2d([data]);
        const prediction = this.model!.predict(input) as any;
        const output = prediction.dataSync()[0];
        return output < 0.5;
    }

    private async loadModel() {
        this.model = await tf.loadLayersModel(AutismClassifierService.MODEL_URL);
    }
}


export const autismClassifierService = new AutismClassifierService();
