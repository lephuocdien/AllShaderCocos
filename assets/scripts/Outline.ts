
import { _decorator, Component, Node, Sprite, v2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Outline')
export class Outline extends Component 
{
    @property(Sprite)
    sprite:Sprite =null!;
    
    private enableOutline = false;

    ClickOutline()
    {
        this.enableOutline =!this.enableOutline;
        var param;
        if(this.enableOutline)
            param=1;
        else
            param =0;
        this.sprite.getMaterial(0)?.setProperty('isUseOutline',param)
    }
   
}

