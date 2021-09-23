
import { _decorator, Component, Node, SpringJoint2D, Sprite, Vec4, v4,Touch,EventTouch, UITransform, systemEvent, SystemEventType, EventMouse, v2, v3, Vec3 } from 'cc';
const { ccclass, property } = _decorator;
const temp_v2 = v2();
const temp_v3 = v3();
@ccclass('HoverSprite')
export class HoverSprite extends Component {
   @property(Sprite)
   sprite:Sprite =null!;

   private _param= v4();
   private _uiTrans : UITransform = null!;

    start ()
    {
        this._uiTrans = this.sprite.getComponent(UITransform)!;
        systemEvent.on(SystemEventType.TOUCH_MOVE,this.OnTouchMove,this);
      
        this._param.z = 1;
        this._param.w = this._uiTrans.height / this._uiTrans.width;
       
        
    }
    OnTouchMove(touch: Touch, evt: EventTouch)
    { const location = evt.getUILocation(temp_v2);
        const worldLocation = Vec3.set(temp_v3,location.x,location.y,0);
        const spritelocation = this._uiTrans.convertToNodeSpaceAR(worldLocation,temp_v3);
        this._param.x = spritelocation.x / this._uiTrans.width + this._uiTrans.anchorX;
        this._param.y = 1 - ( spritelocation.y /this._uiTrans.height + this._uiTrans.anchorX  );
        this.sprite.getMaterial(0)?.setProperty('params',this._param)

    }
    onMouseMove(evt:EventMouse)
    {
        const location = evt.getUILocation(temp_v2);
        const worldLocation = Vec3.set(temp_v3,location.x,location.y,0);
        const spritelocation = this._uiTrans.convertToNodeSpaceAR(worldLocation,temp_v3);
        this._param.x = spritelocation.x / this._uiTrans.width + this._uiTrans.anchorX;
        this._param.y = 1 - ( spritelocation.y /this._uiTrans.height + this._uiTrans.anchorX  );
        this.sprite.getMaterial(0)?.setProperty('params',this._param)
    }

    
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.0/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.0/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.0/manual/en/scripting/life-cycle-callbacks.html
 */
