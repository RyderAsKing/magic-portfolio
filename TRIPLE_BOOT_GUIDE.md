# How to triple boot your PC with windows and any two linux OS of your choice

This guide serves as an example to triple booting your machine with 3 operating systems of your choice (Windows and two other).

I had always wanted to dual boot and it was really easy, however all the guides out there were incomplete on triple booting.

My original dual boot was Windows 11 and Arch Linux, which was fine but I also wanted to use Ubuntu. VM never gives me the raw power that I need so that wont work, that is when I decided to triple boot.

## Things to keep in mind

1. Windows uses NTFS, Linux uses EXT4, EFI system partitions use FAT32.

2. Windows cannot access EXT4, it will be literally invisible to windows, on the other hand Linux will be able to access NTFS by mounting a partition, do note that if fast boot or equivalent is enabled, this could lead to data loss.

3. If you are going install your linux system on an encrypted disk, you need to disable encryption

## Personal recommendations

1. Have atleast 500 GB for your main windows partition (windows, usually tends to use more space), 150 for the root partitions for either of your linux OS

2. Creating a shared disk which is NTFS, since you can easily access NTFS file over linux operating system this allows you to share files between windows and both the linux OS (do note that since it is NTFS and not EXT4, the operations will be quite slow)

3. Create partition where you will store bulk of your data in your linux partition (eg. 500 GB partition mounted at /mnt/data) exclusively for a single OS (linux)

4. If you plan to play games, the 3rd recommendation will be important to store game files without losing the track of the game files (if you dont permanently mount using FSTAB, and mount every boot manually, steam games will not work)

## ESP explained

A small, FAT32-formatted partition on a data storage device that is used by computers with UEFI firmware to boot operating systems and utilities. It stores essential bootloader programs, device drivers, and system utility files required to start the operating system.

If you can install the kernel and initramfs on the ESP then you do not need a bootloader

## Bootloader explained

A bootloader is a small, crucial program that executes when a device starts, responsible for initializing hardware and loading the operating system (OS) or firmware into memory.

## Grub explained

A bootloader is a small, crucial program that executes when a device starts, responsible for initializing hardware and loading the operating system (OS) or firmware into memory.

## Kernel and Initramfs explained

A kernel is the central, core component of a computer's operating system (OS) that acts as a bridge between software and hardware, managing system resources like memory and CPU time, and facilitating communication between them.

An initramfs (initial RAM file system) is a temporary root file system loaded into memory by the bootloader, containing essential drivers and tools needed to mount the actual root file system and continue the boot process.
