
import { _decorator, Component, Node, Slider, Color, Sprite } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = RoundCorner
 * DateTime = Fri Oct 15 2021 16:51:50 GMT+0700 (Indochina Time)
 * Author = ledien
 * FileBasename = RoundCorner.ts
 * FileBasenameNoExtension = RoundCorner
 * URL = db://assets/scripts/RoundCorner.ts
 * ManualUrl = https://docs.cocos.com/creator/3.3/manual/en/
 *
 */
 
@ccclass('RoundCorner')
export class RoundCorner extends Component 
{
    private  _color = new Color();

    changeAlpha(slider:Slider)
    {
        const spriteComp = this.getComponent(Sprite);
        spriteComp.getMaterial(0).setProperty('radius',slider.progress)
        
    }   
}

