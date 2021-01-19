class mango{
    constructor(x,y,r){
    this.img=loadImage("mango4.png")
    this.radius=r
    var properties={
        isStatic:true,
        restitution:0,
        friction:1
    }
    this.body=Matter.Bodies.circle(x,y,r,properties)
    Matter.World.add(world,this.body)
}
display(){
    imageMode(CENTER)
    image(this.img, this.body.position.x, this.body.position.y, this.radius*2, this.radius*2) 
   }}